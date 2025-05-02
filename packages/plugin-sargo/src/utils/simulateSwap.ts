// scripts/simulateSwap.ts

import { type IAgentRuntime } from "@elizaos/core";
import { handleSwapLogs, simulateSwapEvent } from "../services/swapEventListener";
import { EscrowTransaction } from "../types";

// --- 1. Mock Runtime ----------------------------------------------------
const mockRuntime: IAgentRuntime = {
  messageManager: {
    async createMemory(mem) {
      console.log('[MockMemory] ', mem.content.text);
    },
  },
  providers: [],
} as any;

// --- 2. Fake EscrowTransaction -----------------------------------------
const fakeTxn: EscrowTransaction = {
  id: 1n,
  refNumber: 'SIM-REF-001',
  txType: 2,                // swap
  status: 3,                // completed
  currencyCode: 'cUSD',
  conversionRate: 1n,
  totalAmount: 1_000n,
  netAmount: 990n,
  agentFee: 5n,
  treasuryFee: 5n,
  clientAccount: '0x1111111111111111111111111111111111111111',
  agentAccount:  '0x2222222222222222222222222222222222222222',
  account: {
    clientPhoneNumber: '+254700000000',
    clientName: 'Alice',
    agentPhoneNumber: '+254711111111',
    agentName: 'Bob',
  },
  paymentMethod: 'MPESA',
  timestamp: BigInt(Math.floor(Date.now() / 1000)),
  clientApproved: true,
  agentApproved: true,
  clientKey: 'cKey',
  agentKey: 'aKey',
  requestIndex: 0n,
  clientPairedIndex: 0n,
  agentPairedIndex: 0n,
  businessNumber: 'BN-SIM',
  tokenName: 'cUSD',
  tokenAddress: '0x874069fa1eb16d44d622f2e0ca25eea172369bc1',
};

// --- 3. Stub deployer.writeContract so we don't hit the chain ----------
const stubWrite = async (user: `0x${string}`) => {
  console.log(`[StubWrite] would reward ${user}`);
  return '0xSIMULATED_HASH';
};

// --- 4. Kick off --------------------------------------------------------
await simulateSwapEvent(
  mockRuntime,
  { args: { txn: fakeTxn } },
  stubWrite,
);

console.log('✅  Simulation complete');
