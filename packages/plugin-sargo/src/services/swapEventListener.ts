import { createClients } from "../utils/helpers";
import { type IAgentRuntime } from "@elizaos/core";
import Http from "../shared/Http";
import { apiOptions } from "../res/api.config";
import { EscrowTransactionLog } from "../types";
import * as dotenv from "dotenv";
import { SargoEscrowAbi } from "../utils/sargoAbi";
import { Event } from "../enums/Event";
import { RewardSwapAbi } from "../utils/rewardSwapAbi";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const isProd = process.env.NODE_ENV === "production";

const P2P_CONTRACT_ADDRESS = (isProd
    ? process.env.SARGO_P2P_MAINNET_CONTRACT_ADDRESS
    : process.env.SARGO_P2P_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

const REWARD_CONTRACT_ADDRESS = (isProd
    ? process.env.SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
    : process.env.SARGO_REWARD_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

enum Status {
    OPEN,
    IN_PROGRESS,
    DISPUTED,
    COMPLETED,
    CANCELLED,
    EXPIRED,
    REFUNDED,
    CLAIMED,
    FAILED,
}

enum TxType {
    BUY,
    SELL,
    TRANSFER,
}

let listenerActive = false;

export async function startSwapListener(runtime: IAgentRuntime) {
    let retryCount = 0;

    const run = async () => {
        if (listenerActive) return;
        listenerActive = true;

        const rewardedUser = '0x2cB513bAf331C28F7a8B517722993B7deF5Db601' as `0x${string}`

        // getRewardedTxnId(180n);
        // getRewardedUser(rewardedUser);
        // getAllRewardedEvents()

        const { publicClient, deployer, account: signer, chainId } = createClients();

        console.log(`[SwapListener] 🔄 Listening on ${chainId.name}…`);
        console.log(`[SwapListener] Using Escrow: ${P2P_CONTRACT_ADDRESS}`);
        console.log(`[SwapListener] Using Reward: ${REWARD_CONTRACT_ADDRESS}`);

        const processedTxs = new Set<bigint>();
        const pendingRewards = new Set<`0x${string}`>();

        try {

            await publicClient.watchContractEvent({
                address: P2P_CONTRACT_ADDRESS,
                abi: SargoEscrowAbi,
                eventName: Event.TRANSACTIONCOMPLETED,
                poll: true,
                onLogs: async (logs) => {
                    for (const log of logs) {
                        const { txn } = (log as any).args as { txn: EscrowTransactionLog };

                        if (processedTxs.has(txn.id)) {
                            console.log(`[SwapListener] 🛑 Skipping duplicate Tx ${txn.id}`);
                            continue;
                        }
                        processedTxs.add(txn.id);

                        console.log(
                            `[SwapListener] 🧾 Tx ${txn.id} | Client ${txn.clientAccount} | Type ${txn.txType} | Status ${txn.status} | Approvals C:${txn.clientApproved} A:${txn.agentApproved}`
                        );

                        const isSwap = txn.txType === TxType.BUY || txn.txType === TxType.SELL;
                        const isCompleted =
                            txn.status === Status.COMPLETED &&
                            txn.clientApproved &&
                            txn.agentApproved;

                        if (!isSwap || !isCompleted) {
                            console.log("[SwapListener] ⏭️ Skipping non-completed swap");
                            continue;
                        }

                        const userAddress = txn.clientAccount as `0x${string}`;
                        const txnId = txn.id;

                        if (pendingRewards.has(userAddress)) {
                            console.log(`[SwapListener] ⏭️ ${userAddress} reward already in progress`);
                            continue;
                        }

                        if (await checkIfAlreadyRewarded(userAddress)) {
                            console.log(`[SwapListener] ⏭️ ${userAddress} already rewarded`);
                            continue;
                        }

                        pendingRewards.add(userAddress);
                        console.log(`[SwapListener] 🎁 Rewarding ${userAddress}...`);

                        try {
                            const rewardTxHash = await deployer.writeContract({
                                address: REWARD_CONTRACT_ADDRESS,
                                abi: RewardSwapAbi,
                                functionName: "rewardFirstSwap",
                                args: [userAddress, txnId],
                                account: signer,
                                chain: chainId,
                            });

                            console.log(`[SwapListener] ✅ Reward sent: ${rewardTxHash}`);

                            const receipt = await publicClient.waitForTransactionReceipt({ hash: rewardTxHash });

                            console.log(
                                "Transaction Details:",
                                receipt.status,
                                receipt.transactionHash,
                                receipt.blockNumber
                            );

                            const tx = await publicClient.getTransaction({ hash: rewardTxHash });
                            if (!tx) console.warn("⚠️ Transaction was not propagated or was dropped.");

                            // await saveRewardedUser(userAddress, rewardTxHash, runtime);
                        } catch (err) {
                            console.error("[SwapListener] ❌ Reward error:", err);
                        } finally {
                            pendingRewards.delete(userAddress);
                        }
                    }
                },
                onError: (err) => {
                    if (
                        typeof err === "object" &&
                        err !== null &&
                        ("code" in err || "message" in err || "shortMessage" in err)
                    ) {
                        const error = err as { code?: number; message?: string; shortMessage?: string };
                        console.error("[SwapListener] 🚨 Watch error:", error);

                        const isRecoverable =
                            error.code === -32000 ||
                            (typeof error.message === "string" && error.message.toLowerCase().includes("filter not found")) ||
                            (typeof error.shortMessage === "string" && error.shortMessage.toLowerCase().includes("filter not found"));

                        if (isRecoverable) {
                            console.warn("[SwapListener] 🔁 Filter lost — restarting listener...");
                        } else {
                            console.warn("[SwapListener] ❌ Unrecoverable error — shutting down listener...");
                        }
                    } else {
                        console.error("[SwapListener] 🚨 Unknown error shape:", err);
                    }

                    listenerActive = false;

                    retryCount++;
                    const delay = Math.min(5000 * retryCount, 60000);
                    console.log(`[SwapListener] ⏳ Restarting listener in ${delay / 1000}s...`);
                    setTimeout(run, delay);
                },

            });

            publicClient.watchContractEvent({
                address: REWARD_CONTRACT_ADDRESS,
                abi: RewardSwapAbi,
                eventName: 'Rewarded',
                poll: true,
                strict: true,
                onLogs: async (logs) => {
                    for (const log of logs) {
                        const { user, amount, timestamp, txnId } = (log as any).args as {
                            user: `0x${string}`;
                            amount: bigint;
                            timestamp: bigint;
                            txnId: bigint;
                        };

                        console.log(`[RewardListener] 🎉 User ${user} was rewarded with ${amount} tokens at transactionId ${txnId} ${new Date(Number(timestamp) * 1000).toISOString()}`);

                        // Optionally save to DB
                        // await saveRewardedUser(user, log.transactionHash, runtime);
                    }
                },
                onError: (err) => {
                    console.error("[RewardListener] ❌ Watch error:", err);
                },
            });


        } catch (error) {
            console.error("[SwapListener] 💥 Listener crashed:", error);
            listenerActive = false;

            retryCount++;
            const delay = Math.min(5000 * retryCount, 60000);
            console.log(`[SwapListener] ⏳ Restarting listener in ${delay / 1000}s...`);
            setTimeout(run, delay);
        }
    };

    run();
}

async function checkIfAlreadyRewarded(userAddress: `0x${string}`): Promise<boolean> {
    const { publicClient } = createClients();

    try {
        return (await publicClient.readContract({
            address: REWARD_CONTRACT_ADDRESS,
            abi: RewardSwapAbi,
            functionName: "rewarded",
            args: [userAddress],
        })) as boolean;
    } catch (err) {
        console.error(`[RewardCheck] ❌ Could not read reward status for ${userAddress}`, err);
        return false;
    }
}

async function getRewardedTxnId(txnId: BigInt) {
    const { publicClient } = createClients();

    const logs = await publicClient.getContractEvents({
        abi: RewardSwapAbi,
        address: REWARD_CONTRACT_ADDRESS,
        eventName: 'Rewarded',
        args: {
            txnId: txnId,
        },
        fromBlock: "earliest",
        toBlock: "latest"
    })

    console.log('getRewardedTxnId:', logs)
    return logs
}

async function getRewardedUser(user: `0x${string}`) {
    const { publicClient } = createClients();

    const logs = await publicClient.getContractEvents({
        abi: RewardSwapAbi,
        address: REWARD_CONTRACT_ADDRESS,
        eventName: 'Rewarded',
        args: {
            user: user,
        },
        fromBlock: "earliest",
        toBlock: "latest"
    })

    console.log('getRewardedUser:', logs)
    return logs
}

async function getAllRewardedEvents() {
    const { publicClient } = createClients();

    const logs = await publicClient.getContractEvents({
        abi: RewardSwapAbi,
        address: REWARD_CONTRACT_ADDRESS,
        eventName: 'Rewarded',
        fromBlock: "earliest",
        toBlock: "latest"
    })

    console.log('getAllRewardedEvents:', logs)
    return logs
}

async function saveRewardedUser(userAddress: `0x${string}`, txHash: string, runtime: IAgentRuntime) {
    const rewardService = new SargoRewardService(runtime);
    await rewardService.saveToElizaMemory(userAddress, txHash);
    await rewardService.saveReward({ userAddress, txHash });
}

class SargoRewardService {
    constructor(private runtime: IAgentRuntime) { }

    async saveToElizaMemory(userAddress: `0x${string}`, txHash: string) {
        const memory = {
            userId: userAddress,
            agentId: "agent-id",
            content: {
                text: `🎉 User ${userAddress} was rewarded. Tx: ${txHash}`,
            },
            roomId: "roomId",
        };
        await this.runtime.messageManager.createMemory(memory as any);
    }

    async saveReward(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewards/add`, _req);
    }


    async saveAllRewards(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewards/`, _req);
    }

    async getRewardByUser(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewards/user`, _req);
    }

    async getRewardByTxId(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewards/tx`, _req);
    }

    async getAllRewards(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewards/`, _req);
    }
}
