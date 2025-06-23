import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import {
  createPublicClient,
  createWalletClient,
  http,
  webSocket,
  PublicClient,
  WalletClient,
} from "viem";
import { celo, celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const {
  SARGO_AGENT_PRIVATE_KEY,
  CELO_RPC,
  NODE_ENV,
  SARGO_P2P_MAINNET_CONTRACT_ADDRESS,
  SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
} = process.env;

if (!SARGO_AGENT_PRIVATE_KEY) {
  throw new Error(`Missing .env.${NODE_ENV}: SARGO_AGENT_PRIVATE_KEY`);
}

export function createClients(options?: { network?: "mainnet" | "testnet" }): {
  publicClient: PublicClient;
  deployer: WalletClient;
  account: any;
  chainId: typeof celo | typeof celoAlfajores;
} {
  const isMainnet = NODE_ENV === "production";
  const chainId = isMainnet ? celo : celoAlfajores;
  const rpcUrl = CELO_RPC;

  console.log("isMainnet", isMainnet);
  console.log("ChainId:", chainId.id);
  console.log("rpcUrl:", rpcUrl);
  console.log("Escrow Address:", SARGO_P2P_MAINNET_CONTRACT_ADDRESS);
  console.log("Reward Address:", SARGO_REWARD_MAINNET_CONTRACT_ADDRESS);

  if (!rpcUrl) {
    throw new Error(`Missing CELO_RPC in .env.${NODE_ENV}`);
  }

  const account = privateKeyToAccount(`0x${SARGO_AGENT_PRIVATE_KEY}`);

  const publicClient = createPublicClient({
    chain: chainId,
    transport: webSocket(rpcUrl),
  });

  const deployer = createWalletClient({
    account,
    chain: chainId,
    transport: http(),
  });

  return {
    publicClient: publicClient as PublicClient & { account: undefined },
    deployer,
    account,
    chainId,
  };
}
