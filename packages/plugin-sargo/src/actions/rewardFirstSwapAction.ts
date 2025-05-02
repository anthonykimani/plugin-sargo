import {
    ActionExample,
    type Action,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";
import { createClients } from "../utils/helpers";
import { BalanceProvider } from "../providers";
import { parseAbiItem } from "viem";
import { celoAlfajores } from "viem/chains";
import { EscrowTransaction } from "../types";
import { escrowAbi } from "../utils/escrowAbi";


const rewardAbi = [parseAbiItem("function rewardFirstSwap(address user) external")];

const P2P_CONTRACT_ADDRESS = process.env.P2P_CONTRACT_ADDRESS as `0x${string}`;
const REWARD_CONTRACT_ADDRESS = process.env.REWARD_CONTRACT_ADDRESS as `0x${string}`;

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

        // Get the provider (extracts wallet address from message)
        const provider = runtime.providers.find(p => p instanceof BalanceProvider);
        if (!provider) {
            throw new Error("BalanceProvider not found");
        }

        const address = await provider.get(runtime, message, state) as `0x${string}`;

        if (!address) {
            await callback({
                text: "👋 I couldn’t find your wallet address. Please reply with your address (starts with 0x...) so I can check your reward.",
            });
            return true;
        }

        try {
            // 🧮 Step 1: Check history length
            const historyLength = await publicClient.readContract({
                address: P2P_CONTRACT_ADDRESS,
                abi: escrowAbi,
                functionName: "getAcountHistoryLength",
                args: [address],
            });

            console.log(`[Reward Debug] Found ${historyLength} transaction(s) for ${address}`);

            if (historyLength === 0n) {
                await callback({ text: `❌ This wallet hasn't performed any swaps yet.` });
                console.log("[Reward Debug] No transactions found.");
                return true;
            }

            // 🧾 Step 2: Get first transaction ID
            let foundSwapTxn = null;

            for (let i = 0n; i < historyLength; i++) {
                const txnId = await publicClient.readContract({
                    address: P2P_CONTRACT_ADDRESS,
                    abi: escrowAbi,
                    functionName: "acountHistory",
                    args: [address, i],
                });

                const txn = await publicClient.readContract({
                    address: P2P_CONTRACT_ADDRESS,
                    abi: escrowAbi,
                    functionName: "getTransactionById",
                    args: [txnId],
                }) as unknown as EscrowTransaction;

                if (txn.txType === 2 && txn.status === 3) {
                    foundSwapTxn = txn;
                    break;
                }

                console.log(`[Reward Debug] Checking Txn #${txnId} — Type: ${txn.txType}, Status: ${txn.status}`);

                const TRANSFER = 2;
                const COMPLETED = 3;

                if (txn.clientApproved && txn.agentApproved && txn.status === COMPLETED) {
                    foundSwapTxn = txn;
                    console.log(`[Reward Debug] ✅ First completed swap found! Txn ID: ${txnId}`);
                    break;
                }
            }



            if (!foundSwapTxn) {
                console.log("[Reward Debug] ❌ No completed swap found.");
                await callback({
                    text: `⛔ This wallet hasn't completed a swap yet.`,
                });
                return true;
            }

            // 🎁 Step 4: Reward user for their first swap
            const txHash = await deployer.writeContract({
                address: REWARD_CONTRACT_ADDRESS,
                abi: rewardAbi,
                functionName: "rewardFirstSwap",
                args: [address],
                account,
                chain: celoAlfajores,
            });

            console.log(`[Reward Debug] 🎉 Reward transaction sent: ${txHash}`);

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
                console.log("[Reward Debug] ⚠️ User already claimed reward.");
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
                    text: "Can I claim my reward? I just did my first swap — here's my address 0xABC123...",
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
} as Action