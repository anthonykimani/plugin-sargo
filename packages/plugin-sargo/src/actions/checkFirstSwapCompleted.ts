import { createClients } from "../utils/helpers";
import { parseAbi } from "viem";
import { celoAlfajores } from "viem/chains";

const escrowAbi = parseAbi([
  "function getAcountHistoryLength(address) view returns (uint256)",
  "function acountHistory(address,uint256) view returns (uint256)",
  "function getTransactionById(uint256) view returns (tuple(uint256 id, uint256 refNumber, uint8 txType, uint8 status, uint256 totalAmount, uint256 netAmount, uint256 agentFee, uint256 treasuryFee, bool agentApproved, bool clientApproved, uint256 timestamp, address agentAccount, address clientAccount, string currencyCode, uint256 conversionRate, string paymentMethod, string clientKey, string agentKey, tuple(string clientName, string clientPhoneNumber, string agentName, string agentPhoneNumber) account))"
]);

const ESCROW_ADDRESS = process.env.P2P_CONTRACT_ADDRESS as `0x${string}`;

export async function hasCompletedSwap(wallet: `0x${string}`): Promise<boolean> {
  const { publicClient } = createClients();

  const count = await publicClient.readContract({
    address: ESCROW_ADDRESS,
    abi: escrowAbi,
    functionName: "getAcountHistoryLength",
    args: [wallet],
  });

  if (Number(count) === 0) return false;

  const txnId = await publicClient.readContract({
    address: ESCROW_ADDRESS,
    abi: escrowAbi,
    functionName: "acountHistory",
    args: [wallet, BigInt(0)],
  });

  const txn = await publicClient.readContract({
    address: ESCROW_ADDRESS,
    abi: escrowAbi,
    functionName: "getTransactionById",
    args: [txnId],
  }) as {
    status: number;
    txType: number;
  };

  // Completed = status 2
  const STATUS_COMPLETED = 2;
  return txn.status === STATUS_COMPLETED;
}
