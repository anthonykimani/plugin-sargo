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
import { IReward } from "../interfaces/IReward";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const isProd = process.env.NODE_ENV === "production";

const P2P_CONTRACT_ADDRESS = (isProd
  ? process.env.SARGO_P2P_MAINNET_CONTRACT_ADDRESS
  : process.env.SARGO_P2P_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

const REWARD_CONTRACT_ADDRESS = (isProd
  ? process.env.SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
  : process.env.SARGO_REWARD_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

const ENABLE_CLIENT_REWARD = process.env.ENABLE_CLIENT_REWARD === "true";
const ENABLE_MERCHANT_REWARD = process.env.ENABLE_MERCHANT_REWARD === "true";

let listenerActive = false;
let reconnectTimeout: NodeJS.Timeout;
let swapUnwatch: (() => void) | null = null;
let rewardUnwatch: (() => void) | null = null;

// 👇 Track seen logs by unique key
const seenSwapLogs = new Set<string>();
const seenRewardLogs = new Set<string>();

// 🧹 Optional: clear cache every 10 minutes
setInterval(() => {
  seenSwapLogs.clear();
  seenRewardLogs.clear();
  console.log("[Listener] 🧹 Cleared seen log cache");
}, 10 * 60 * 1000);

export async function startSwapListener(runtime: IAgentRuntime) {
  let retryCount = 0;
  const { publicClient, deployer, account: signer, chainId } = createClients();
  const rewardService = new SargoRewardService(runtime);

  const run = async () => {
    if (listenerActive) return;
    listenerActive = true;

    if (reconnectTimeout) clearTimeout(reconnectTimeout);

    console.log(`[SwapListener] 🔄 Listening on ${chainId.name}…`);
    console.log(`[SwapListener] Using Escrow: ${P2P_CONTRACT_ADDRESS}`);
    console.log(`[SwapListener] Using Reward: ${REWARD_CONTRACT_ADDRESS}`);

    reconnectTimeout = setTimeout(() => {
      console.warn("[SwapListener] 🔁 15-minute reconnect triggered");
      listenerActive = false;
      try {
        swapUnwatch?.();
        rewardUnwatch?.();
      } catch (err) {
        console.error("[SwapListener] ⚠️ Error during manual unwatch:", err);
      }
      run();
    }, 15 * 60 * 1000);

    const getAllRewards = await rewardService.getAllRewards();
    const processedTxs = new Set<bigint>(getAllRewards.payload.data.map((reward: IReward) => BigInt(reward.txId)));
    const pendingRewards = new Set<`0x${string}`>();

    console.log("ProcessedTxs: 👀", processedTxs);

    try {
      swapUnwatch = publicClient.watchContractEvent({
        address: P2P_CONTRACT_ADDRESS,
        abi: SargoEscrowAbi,
        eventName: Event.TRANSACTIONCOMPLETED,
        onLogs: async (logs) => {
          for (const log of logs) {
            const logKey = `${log.transactionHash}-${log.logIndex}`;
            if (seenSwapLogs.has(logKey)) {
              console.log(`[SwapListener] 🔁 Duplicate swap log skipped: ${logKey}`);
              continue;
            }
            seenSwapLogs.add(logKey);

            const { txn } = (log as any).args as { txn: EscrowTransactionLog };

            if (processedTxs.has(txn.id)) {
              console.log(`[SwapListener] 🛑 Skipping duplicate Tx ${txn.id}`);
              continue;
            }
            processedTxs.add(txn.id);

            console.log(
              `[SwapListener] 🧾 Swap Tx ${txn.id} | Client ${txn.clientAccount} | Type ${txn.txType} | Status ${txn.status} | Approvals Client:${txn.clientApproved} ✅ Agent:${txn.agentApproved} ✅`
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

            const clientAddress = buySwap
              ? (txn.clientAccount as `0x${string}`)
              : (txn.agentAccount as `0x${string}`);

            const merchantAddress = buySwap
              ? (txn.agentAccount as `0x${string}`)
              : (txn.clientAccount as `0x${string}`);

            if (!clientAddress || !merchantAddress) {
              console.log(`[SwapListener] ⚠️ Invalid swap participants. Skipping.`);
              continue;
            }

            const txnId = txn.id;

            if (pendingRewards.has(clientAddress)) {
              console.log(`[SwapListener] ⏭️ ${clientAddress} reward already in progress`);
              continue;
            }

            pendingRewards.add(clientAddress);

            try {
              const isClientAlreadyRewarded = await rewardService.checkIfAlreadyRewarded(clientAddress);

              if (!isClientAlreadyRewarded) {
                console.log(`[SwapListener] 🎁 First swap for ${clientAddress}. Issuing rewards…`);

                if (ENABLE_CLIENT_REWARD) {
                  const rewardTxHashClient = await deployer.writeContract({
                    address: REWARD_CONTRACT_ADDRESS,
                    abi: RewardSwapAbi,
                    functionName: "rewardFirstSwap",
                    args: [clientAddress, txnId],
                    account: signer,
                    chain: chainId,
                  });
                  console.log(`[SwapListener] ✅ Client Reward Tx: ${rewardTxHashClient}`);
                }

                if (ENABLE_MERCHANT_REWARD) {
                  const rewardTxHashMerchant = await deployer.writeContract({
                    address: REWARD_CONTRACT_ADDRESS,
                    abi: RewardSwapAbi,
                    functionName: "rewardFirstSwap",
                    args: [merchantAddress, txnId],
                    account: signer,
                    chain: chainId,
                  });
                  console.log(`[SwapListener] ✅ Merchant Reward Tx: ${rewardTxHashMerchant}`);
                }
              } else {
                console.log(`[SwapListener] ⏭️ ${clientAddress} already rewarded.`);
              }

            } catch (err) {
              console.error("[SwapListener] ❌ Rewarding error:", err);
            } finally {
              pendingRewards.delete(clientAddress);
            }
          }
        },
        onError: (err) => {
          console.error("[SwapListener] 🚨 Watch error:", err);
          listenerActive = false;
          retryCount++;
          setTimeout(run, Math.min(5000 * retryCount, 60000));
        }
      });

      rewardUnwatch = publicClient.watchContractEvent({
        address: REWARD_CONTRACT_ADDRESS,
        abi: RewardSwapAbi,
        eventName: "Rewarded",
        onLogs: async (logs) => {
          for (const log of logs) {
            const logKey = `${log.transactionHash}-${log.logIndex}`;
            if (seenRewardLogs.has(logKey)) {
              console.log(`[RewardListener] 🔁 Duplicate reward log skipped: ${logKey}`);
              continue;
            }
            seenRewardLogs.add(logKey);

            const { user, amount, timestamp, txnId } = (log as any).args as {
              user: `0x${string}`;
              amount: bigint;
              timestamp: bigint;
              txnId: bigint;
            };

            console.log(`[RewardListener] 🎉 ${user} rewarded ${amount} tokens at txn ${txnId}`);

            await rewardService.getRewardedTxnId(txnId);
            await rewardService.saveReward({
              txId: Number(txnId),
              userAccount: user,
              amount: Number(amount),
              tokenName: "cUSD",
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
          listenerActive = false;
          retryCount++;
          setTimeout(run, Math.min(5000 * retryCount, 60000));
        }
      });

    } catch (error) {
      console.error("[SwapListener] 💥 Listener crashed:", error);
      listenerActive = false;
      retryCount++;
      setTimeout(run, Math.min(5000 * retryCount, 60000));
    }
  };

  run();
}
