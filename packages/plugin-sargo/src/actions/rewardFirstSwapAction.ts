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
import { EscrowTransaction } from "../types";
import { escrowAbi } from "../abis/escrowAbi";
import { TransactionType } from "../enums/TransactionType";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// Dynamically load address based on env
const isProd = process.env.NODE_ENV === "production";
const P2P_CONTRACT_ADDRESS = (isProd
  ? process.env.SARGO_P2P_MAINNET_CONTRACT_ADDRESS
  : process.env.SARGO_P2P_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;
const REWARD_CONTRACT_ADDRESS = (isProd
  ? process.env.SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
  : process.env.SARGO_REWARD_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

const rewardAbi = [parseAbiItem("function rewardFirstSwap(address user) external")];

export const rewardFirstSwapAction: Action = {
  name: "reward_first_swap",
  description: "Checks if a wallet did its first swap and sends a reward",
  similes: ["first swap", "reward swap", "claim reward", "earn reward"],

  validate: async (_, message) => {
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
    const { publicClient, deployer, account, chainId } = createClients();

    console.log("[Reward Debug] Initializing reward process...");

    const provider = runtime.providers.find(p => p instanceof AddressProvider);
    if (!provider) throw new Error("❌ AddressProvider not found");

    const address = await provider.get(runtime, message, state) as `0x${string}`;
    if (!address) {
      await callback({
        text: "👋 I couldn’t find your wallet address. Please reply with your address (starts with 0x...) so I can check your reward.",
      });
      return true;
    }

    console.log(`[Reward Debug] ✅ Using address: ${address}`);

    try {
      const nextTxId = await publicClient.readContract({
        address: P2P_CONTRACT_ADDRESS,
        abi: escrowAbi,
        functionName: "nextTxId",
      });

      console.log(`[Reward Debug] 📦 Total transactions: ${nextTxId}`);

      let foundSwapTxn: EscrowTransaction | null = null;

      for (let i = 0n; i < nextTxId; i++) {
        const txn = await publicClient.readContract({
          address: P2P_CONTRACT_ADDRESS,
          abi: escrowAbi,
          functionName: "getTx",
          args: [i],
        }) as unknown as EscrowTransaction;

        if (!txn) continue;

        const isClient = txn.clientAccount.toLowerCase() === address.toLowerCase();
        const isAgent = txn.agentAccount.toLowerCase() === address.toLowerCase();

        if (!isClient && !isAgent) continue;

        const isSwap =
          txn.txType === TransactionType.BUY || txn.txType === TransactionType.SELL;
        const isComplete = txn.status === 3 && txn.clientApproved && txn.agentApproved;

        if (isSwap && isComplete) {
          foundSwapTxn = txn;
          console.log(`[Reward Debug] ✅ Found valid swap: Tx ID ${txn.id}`);
          break;
        }
      }

      if (!foundSwapTxn) {
        await callback({
          text: `⛔ This wallet hasn't completed a swap yet.`,
        });
        return true;
      }

      console.log(`[Reward Debug] 🎁 Sending reward to ${address}...`);

      const txHash = await deployer.writeContract({
        address: REWARD_CONTRACT_ADDRESS,
        abi: rewardAbi,
        functionName: "rewardFirstSwap",
        args: [address],
        account,
        chain: chainId,
      });

      console.log(`[Reward Debug] ✅ Reward Tx: ${txHash}`);

      await callback({
        text: `🎉 You've been rewarded for your first Sargo swap! Tx: https://celoscan.io/tx/${txHash}`,
      });

      return true;
    } catch (error: any) {
      console.error("❌ [Reward Error]", error);

      if (
        typeof error?.shortMessage === "string" &&
        error.shortMessage.includes("already rewarded")
      ) {
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
        },
      },
    ],
  ] as ActionExample[][],
} as Action;
