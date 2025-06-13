import { celoAlfajores } from "viem/chains";
import { escrowAbi } from "../utils/escrowAbi";
import { createClients } from "../utils/helpers";
import { type IAgentRuntime } from "@elizaos/core";
import {
    Address,
    BlockTag,
    parseAbiItem,
    type AbiEvent,
    type Log,
} from "viem";
import Http from "../shared/Http";
import { apiOptions } from "../res/api.config";
import { EscrowTransactionLog } from "../types";
import * as dotenv from "dotenv";
import { SargoEscrowAbi } from "../utils/sargoAbi";
import { Event } from "../enums/Event";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const P2P_CONTRACT_ADDRESS = process.env.SARGO_P2P_CONTRACT_ADDRESS as `0x${string}`;
const REWARD_CONTRACT_ADDRESS = process.env.SARGO_REWARD_CONTRACT_ADDRESS as `0x${string}`;


const rewardAbi = [parseAbiItem("function rewardFirstSwap(address user) external")];

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
    BUY,      // 0
    SELL,     // 1
    TRANSFER, // 2 (not rewarded)
}

export async function startSwapListener(runtime: IAgentRuntime) {
    const { publicClient, deployer, account: signer } = createClients();

    console.log("[SwapListener] 🔄 Starting HTTP log poller…");

    let lastProcessed = await publicClient.getBlockNumber();
    console.log(`[SwapListener] ⏩ Beginning at block ${lastProcessed}`);

    console.log("Escrow address", P2P_CONTRACT_ADDRESS);

    publicClient.watchContractEvent({
        address: P2P_CONTRACT_ADDRESS,
        abi: SargoEscrowAbi,
        eventName: Event.TRANSACTIONCOMPLETED,
        poll: true,
        onLogs: async (logs) => {
            for (const log of logs) {
                try {
                    const { txn } = (log as any).args as { txn: EscrowTransactionLog };

                    console.log(
                        `[SwapListener] 🧾 Tx ${txn.id} | Client ${txn.clientAccount} | Agent ${txn.agentAccount} | Type ${txn.txType} | Status ${txn.status} | Approvals C:${txn.clientApproved} A:${txn.agentApproved}`,
                    );

                    const isSwapType = txn.txType === TxType.BUY || txn.txType === TxType.SELL;
                    const isCompleted =
                        txn.status === Status.COMPLETED && txn.clientApproved && txn.agentApproved;

                    if (!isSwapType || !isCompleted) {
                        console.log("[SwapListener] ⏭️ Not an eligible completed swap");
                        continue;
                    }

                    const userAddress = txn.clientAccount as `0x${string}`;
                    const agentAddress = txn.agentAccount as `0x${string}`;

                    if (await checkIfAlreadyRewarded(userAddress)) {
                        console.log(`[SwapListener] ⏭️ ${userAddress} already rewarded`);
                        continue;
                    }

                    console.log(`[SwapListener] 🚀 Rewarding ${userAddress}…`);

                    const nonce = await publicClient.getTransactionCount({
                        address: '0x4A8E770a33631Bb909c424CaA8C48BbC28Be96b1'
                    });

                    const rewardTxHash = await deployer.writeContract({
                        address: REWARD_CONTRACT_ADDRESS,
                        abi: rewardAbi,
                        functionName: "rewardFirstSwap",
                        args: [userAddress],
                        account: signer,
                        chain: celoAlfajores,
                        nonce
                    });

                    console.log(`[SwapListener] ✅ Reward tx sent: ${rewardTxHash}`);
                    // await saveRewardedUser(userAddress, rewardTxHash, runtime);
                } catch (error) {
                    console.error(`[Swap Listener] ❌ Error processing TransactionCompleted log`, error);
                }
            }
        },
        onError: (err) => console.error('[SwapListener] watch error', err),
    });

}


async function checkIfAlreadyRewarded(userAddress: `0x${string}`): Promise<boolean> {
    // TODO: real check (contract call or DB query)
    return false;
}

async function saveRewardedUser(userAddress: `0x${string}`, txHash: string, runtime: IAgentRuntime) {
    const rewardService = new SargoRewardService(runtime);
    await rewardService.saveToElizaMemory(userAddress, txHash);
    await rewardService.saveToSargoDatabase({ userAddress, txHash });
}

class SargoRewardService {
    constructor(private runtime: IAgentRuntime) { }

    async saveToElizaMemory(userAddress: `0x${string}`, txHash: string) {
        const memory = {
            userId: userAddress,
            agentId: "agent-id",
            content: {
                text: `User ${userAddress} was rewarded for first swap! TxHash: ${txHash}`,
            },
            roomId: "roomId",
        };
        await this.runtime.messageManager.createMemory(memory as any);
    }

    async saveToSargoDatabase(req: { userAddress: `0x${string}`; txHash: string }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.transactions}/rewardUser`, _req);
    }
}
