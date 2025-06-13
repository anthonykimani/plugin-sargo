import {
    ActionExample,
    type Action,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";
import { createClients } from "../utils/helpers";
import { AddressProvider } from "../providers";
import { parseAbiItem } from "viem";
import { celoAlfajores } from "viem/chains";
import { EscrowTransaction } from "../types";
import { escrowAbi } from "../utils/escrowAbi";
import { TransactionType } from "../enums/TransactionType";

const rewardAbi = [parseAbiItem("function rewardFirstSwap(address user) external")];

const P2P_CONTRACT_ADDRESS = process.env.SARGO_P2P_CONTRACT_ADDRESS as `0x${string}`;
const REWARD_CONTRACT_ADDRESS = process.env.SARGO_REWARD_CONTRACT_ADDRESS as `0x${string}`;

export const rewardFirstSwapAction: Action = {
    name: "reward_first_swap",
    description: "Checks if a wallet did its first swap and sends a reward",
    similes: ["first swap", "reward swap", "claim reward", "earn reward"],
    validate: async (runtime, message) => {
        const text = message.content.text?.toLowerCase() ?? "";
        return (
            text.includes("first swap") ||
            text.includes("reward") ||
            text.includes("claim reward")
        );
    },
    handler: async (
        runtime: IAgentRuntime,         
        message: Memory,
        state: State,
        _options: any,
        callback: HandlerCallback
    ) => {
        const { publicClient, deployer, account } = createClients();

        console.log("[Reward Debug] Initializing reward process...");

        // Get provider
        const provider = runtime.providers.find(p => p instanceof AddressProvider);
        if (!provider) {
            console.error("[Reward Debug] ❌ AddressProvider not found");
            throw new Error("AddressProvider not found");
        }

        const address = await provider.get(runtime, message, state) as `0x${string}`;

        if (!address) {
            console.warn("[Reward Debug] ⚠️ No address found in message");
            await callback({
                text: "👋 I couldn’t find your wallet address. Please reply with your address (starts with 0x...) so I can check your reward.",
            });
            return true;
        }

        console.log(`[Reward Debug] ✅ Using address: ${address}`);

        try {
            // Get total number of transactions
            const nextTxId = await publicClient.readContract({
                address: P2P_CONTRACT_ADDRESS,
                abi: escrowAbi,
                functionName: "nextTxId",
            });

            console.log(`[Reward Debug] 📦 Contract reports ${nextTxId} transactions in total`);

            let foundSwapTxn: EscrowTransaction | null = null;

            // Step 2: Loop through transactions to find valid first swap
            for (let i = 0n; i < nextTxId; i++) {
                console.log(`[Reward Debug] 🔍 Checking Tx ID ${i}`);

                const txn = await publicClient.readContract({
                    address: P2P_CONTRACT_ADDRESS,
                    abi: escrowAbi,
                    functionName: "getTx",
                    args: [i],
                }) as unknown as EscrowTransaction;

                if (!txn) {
                    console.warn(`[Reward Debug] ⚠️ No transaction returned for ID ${i}`);
                    continue;
                }

                console.log(`[Reward Debug] Tx ID ${txn.id} | Tx Ref ${txn.refNumber} | Client: ${txn.clientAccount} | Type: ${txn.txType} | Status: ${txn.status} |  ClientApproved: ${txn.clientApproved}, AgentApproved: ${txn.agentApproved}`);

                const isClient = txn.clientAccount.toLowerCase() === address.toLowerCase();
                const isAgent = txn.agentAccount.toLowerCase() === address.toLowerCase();

                if (!isClient && !isAgent) {
                    console.log(`[Reward Debug] Tx ID ${i} skipped: address not client or agent`);
                    continue;
                }

                // Constants
                const TRANSFER = 2;
                const COMPLETED = 3;

                // Check swap completion
                if (
                    txn.txType === TransactionType.BUY || TransactionType.SELL &&
                    txn.status === 3 &&
                    txn.clientApproved &&
                    txn.agentApproved
                ) {
                    foundSwapTxn = txn;
                    console.log(`[Reward Debug] ✅ Found qualifying swap Tx ID: ${txn.id}`);
                    break;
                } else {
                    console.log(`[Reward Debug] ❌ Tx ID ${txn.id} not a valid completed swap`);
                }
            }

            if (!foundSwapTxn) {
                console.warn("[Reward Debug] ❌ No completed swap found for this address");
                await callback({
                    text: `⛔ This wallet hasn't completed a swap yet.`,
                });
                return true;
            }

            // Step 3: Send reward
            console.log(`[Reward Debug] 🚀 Sending reward to ${address}...`);

            const txHash = await deployer.writeContract({
                address: REWARD_CONTRACT_ADDRESS,
                abi: rewardAbi,
                functionName: "rewardFirstSwap",
                args: [address],
                account,
                chain: celoAlfajores,
            });

            console.log(`[Reward Debug] 🎉 Reward transaction hash: ${txHash}`);

            await callback({
                text: `🎉 You've been rewarded for your first Sargo swap! Tx: https://celoscan.io/tx/${txHash}`,
            });

            return true;
        } catch (error: any) {
            console.error("❌ [Reward Error]", error);

            if (
                typeof error?.shortMessage === "string" &&
                error.shortMessage.includes("User already rewarded")
            ) {
                console.log("[Reward Debug] ⚠️ Reward already claimed");
                await callback({
                    text: `✅ You've already claimed your first swap reward.`,
                });
                return true;
            }

            await callback({
                text: `⚠️ Something went wrong while processing your reward. Please try again later.`,
            });

            return true;
        }
    },
    examples: [
        [
            {
                user: "{{user}}",
                content: {
                    text: "Can I claim my reward? I just did my first swap — here's my address 0x99b16591C5A11E4174F30D77F528edf122Ae5b5C",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "User requested their first swap reward and provided wallet",
                    actions: ["REWARD_FIRST_SWAP"],
                },
            },
        ],
        [
            {
                user: "{{user}}",
                content: {
                    text: "i completed my first transaction on sargo, where’s my reward?",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "User is checking if they qualify for the first swap reward",
                    actions: ["REWARD_FIRST_SWAP"],
                },
            },
        ],
        [
            {
                user: "{{user}}",
                content: {
                    text: "yo I just did a swap on sargo for the first time 👀 can I get that reward?",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "First swap reward request with casual tone",
                    actions: ["REWARD_FIRST_SWAP"],
                },
            },
        ],
        [
            {
                user: "{{user}}",
                content: {
                    text: "first ever swap complete 🙌 am I eligible for the bonus?",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "User wondering if they earned the first swap bonus",
                    actions: ["REWARD_FIRST_SWAP"],
                }
            }
        ]
    ] as ActionExample[][]
} as Action;
