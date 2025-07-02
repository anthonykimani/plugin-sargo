import { createClients } from "../utils/helpers";
import { type IAgentRuntime } from "@elizaos/core";
import { EscrowTransactionLog } from "../types";
import * as dotenv from "dotenv";
import { SargoEscrowAbi } from "../abis/sargoAbi";
import { Event } from "../enums/Event";
import { RewardSwapAbi } from "../abis/rewardSwapAbi";
import { TxType } from "../enums/TxType";
import { Status } from "../enums/Status";
import { SargoRewardService } from "../controllers/SargoRewardController";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const isProd = process.env.NODE_ENV === "production";

const P2P_CONTRACT_ADDRESS = (isProd
    ? process.env.SARGO_P2P_MAINNET_CONTRACT_ADDRESS
    : process.env.SARGO_P2P_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

const REWARD_CONTRACT_ADDRESS = (isProd
    ? process.env.SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
    : process.env.SARGO_REWARD_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

let listenerActive = false;

export async function startSwapListener(runtime: IAgentRuntime) {
    let retryCount = 0;
    const { publicClient, deployer, account: signer, chainId } = createClients();
    const rewardService = new SargoRewardService(runtime);

    const run = async () => {
        if (listenerActive) return;
        listenerActive = true;


        console.log(`[SwapListener] 🔄 Listening on ${chainId.name}…`);
        console.log(`[SwapListener] Using Escrow: ${P2P_CONTRACT_ADDRESS}`);
        console.log(`[SwapListener] Using Reward: ${REWARD_CONTRACT_ADDRESS}`);

        /**
         * Connect to database
         * 1. Get all rewards
         */
        const processedTxs = new Set<bigint>();
        const pendingRewards = new Set<`0x${string}`>();

        const getAllRewards = rewardService.getAllRewards;

        console.log("Get All Rewards", getAllRewards)


        try {
            publicClient.watchContractEvent({
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
                            `[SwapListener] 🧾 Swap Event Transaction Completed  Tx ${txn.id} | Client ${txn.clientAccount} | Type ${txn.txType} | Status ${txn.status} | Approvals Client:${txn.clientApproved} ✅ and Agent:${txn.agentApproved} ✅`
                        );

                        const buySwap = txn.txType === TxType.BUY;
                        const sellSwap = txn.txType === TxType.SELL;

                        const isCompleted =
                            txn.status === Status.COMPLETED &&
                            txn.clientApproved &&
                            txn.agentApproved;

                        if (!isCompleted) {
                            console.log("[SwapListener] ⏭️ Skipping non-completed swap");
                            continue;
                        }

                        const rewardAddress = buySwap
                            ? (txn.clientAccount as `0x${string}`)
                            : sellSwap
                                ? (txn.agentAccount as `0x${string}`)
                                : null;

                        if (!rewardAddress) {
                            console.log(`[SwapListener] ⚠️ No valid reward address for txType: ${txn.txType}`);
                            continue;
                        }

                        const txnId = txn.id;

                        if (pendingRewards.has(rewardAddress)) {
                            console.log(`[SwapListener] ⏭️ ${rewardAddress} reward already in progress`);
                            continue;
                        }

                        pendingRewards.add(rewardAddress);

                        const isClientAccountRewarded = await rewardService.checkIfAlreadyRewarded(rewardAddress);

                        console.log(`Is Client Account Rewarded? ${isClientAccountRewarded}`)

                        if (isClientAccountRewarded) {
                            console.log(`[SwapListener] ⏭️ ${rewardAddress} already rewarded`);
                            pendingRewards.delete(rewardAddress);
                            continue;
                        }

                        try {
                            console.log(`[SwapListener] 🎁 Rewarding ${rewardAddress}...`);

                            const rewardTxHash = await deployer.writeContract({
                                address: REWARD_CONTRACT_ADDRESS,
                                abi: RewardSwapAbi,
                                functionName: "rewardFirstSwap",
                                args: [rewardAddress, txnId],
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

                            console.log(`📨 Transaction Details: Receipt Status: 🌡️  ${receipt.status} Receipt BlockNumber: 🗃️  ${receipt.blockNumber} Receipt TransactionHash: 💸 ${receipt.transactionHash}`)

                            const tx = await publicClient.getTransaction({ hash: rewardTxHash });
                            if (!tx) console.warn("⚠️ Transaction was not propagated or was dropped.");

                            // await saveRewardedUser(rewardAddress, rewardTxHash, runtime);
                        } catch (err) {
                            console.error("[SwapListener] ❌ Reward error:", err);
                        } finally {
                            pendingRewards.delete(rewardAddress);
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
                        await rewardService.getRewardedTxnId(txnId);
                        await rewardService.saveReward({
                            txId: Number(txnId),
                            userAccount: user,
                            amount: Number(amount),
                            tokenName: 'cUSD',
                            timestamp: Number(timestamp),
                            rewardType: "swap",
                            rewardStage: "acquisition",
                            contractAddress: `${REWARD_CONTRACT_ADDRESS}`,
                            eventName: "Rewarded"
                        });
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
