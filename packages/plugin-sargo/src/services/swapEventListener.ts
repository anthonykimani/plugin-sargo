import { celoAlfajores } from "viem/chains";
import { escrowAbi } from "../utils/escrowAbi";
import { createClients } from "../utils/helpers";
import {
    ActionExample,
    type Action,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
  } from "@elizaos/core";
  import { createPublicClient, createWalletClient, http, parseAbiItem, type Log } from "viem";
import Http from "../shared/Http";
import { apiOptions } from "../res/api.config";
import { EscrowTransaction } from "../types";
import { privateKeyToAccount } from "viem/accounts";
import * as dotenv from "dotenv";
dotenv.config();


const { JYUKO_PRIVATE_KEY } = process.env;

const P2P_CONTRACT_ADDRESS = process.env.SARGO_P2P_CONTRACT_ADDRESS as `0x${string}`;
const REWARD_CONTRACT_ADDRESS = process.env.SARGO_REWARD_CONTRACT_ADDRESS as `0x${string}`;
const CUSD_TOKEN_ADDRESS = process.env.CUSD_TOKEN_ADDRESS as `0x${string}`;

const rewardAbi = [parseAbiItem("function rewardFirstSwap(address user) external")];
const transactionCompletedFragment = escrowAbi.find(
  (e: any) => e.name === 'TransactionCompleted'
)!;

export async function startSwapListener(runtime: IAgentRuntime) {
    const { publicClient, deployer, account } = createClients();

    publicClient.watchContractEvent({
        address: P2P_CONTRACT_ADDRESS,
        abi: [transactionCompletedFragment],
        eventName: "TransactionCompleted",
        poll: true,
        pollingInterval: 6_000,
        onLogs: async (logs) => {
            for (const log of logs) {
                try {
                    const { txn } = log.args as { txn: EscrowTransaction };

                    const userAddress  = txn.clientAccount as `0x${string}`;
                    const agentAddress  = txn.agentAccount as `0x${string}`;

                    console.log(`[Swap Listener] Detected TransactionCompleted: Client: ${userAddress} Agent: ${agentAddress}`);

        
                    // Check if user has already been rewarded
                    const alreadyRewarded = await checkIfAlreadyRewarded(userAddress);
                    if (alreadyRewarded) {
                        console.log(`[Swap Listener] User ${userAddress} already rewarded. Skipping.`);
                        continue;
                    }

                    // Issue reward
                    const rewardTxHash = await deployer.writeContract({
                        address: REWARD_CONTRACT_ADDRESS,
                        abi: rewardAbi,
                        functionName: "rewardFirstSwap",
                        args: [userAddress],
                        account,
                        chain: celoAlfajores,
                    });

                    console.log(`[Swap Listener] 🎉 Reward issued! TxHash: ${rewardTxHash}`);

                    // Save reward record
                    await saveRewardedUser(userAddress, rewardTxHash, runtime);

                } catch (error) {
                    console.error(`[Swap Listener] ❌ Error processing TransactionCompleted log`, error);
                }
            }
        },
        onError: (err) => console.error('[SwapListener] watch error', err),
    });
}

async function checkIfAlreadyRewarded(userAddress: `0x${string}`): Promise<boolean> {
    // Check from database (or smart contract if reward contract tracks it)
    return false; // Assume not rewarded for now
}

async function saveRewardedUser(userAddress: `0x${string}`, txHash: string, runtime: IAgentRuntime) {
    console.log(`[Swap Listener] Logging rewarded user: ${userAddress} - ${txHash}`);

    const rewardService = new SargoRewardService(runtime);

    // (1) Save into Eliza Memory
    await rewardService.saveToElizaMemory(userAddress, txHash);

    // (2) Save into Sargo Backend
    await rewardService.saveToSargoDatabase({ userAddress, txHash });
}


export class SargoRewardService {
    constructor(private runtime: IAgentRuntime) { };

    async saveToElizaMemory(userAddress: `0x${string}`, txHash: string) {
        const memory = {
            userId: userAddress,
            agentId: "agent-id",
            content: {
                text: `User ${userAddress} was rewarded for first swap! TxHash: ${txHash}`,
            },
            roomId: "roomId"
        };

        // Your runtime object must be passed to here somehow
        await this.runtime.messageManager.createMemory(memory as any);
    }

    async saveToSargoDatabase(req: {
        userAddress: `0x${string}`, txHash: string
    }) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return await Http.post(`${apiOptions.endPoints.transactions}/rewardUser`, _req)
    }
}