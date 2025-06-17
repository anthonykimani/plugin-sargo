import {
  createPublicClient,
  createWalletClient,
  http,
  webSocket,
  PublicClient,
  WalletClient,
} from "viem";
import { celo, celoAlfajores } from "viem/chains";
import { privateKeyToAccount, nonceManager } from "viem/accounts";
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const {
  SARGO_AGENT_PRIVATE_KEY,
  CELO_MAINNET_RPC,
  CELO_TESTNET_RPC,
  NODE_ENV,
} = process.env;

if (!SARGO_AGENT_PRIVATE_KEY) {
  throw new Error("Missing .env: SARGO_AGENT_PRIVATE_KEY");
}

export function createClients(options?: { network?: "mainnet" | "testnet" }): {
  publicClient: PublicClient;
  deployer: WalletClient;
  account: any;
  chainId: typeof celo | typeof celoAlfajores;
} {
  const isMainnet =
    options?.network === "mainnet" || NODE_ENV === "production";

  const chainId = isMainnet ? celo : celoAlfajores;
  const rpcUrl = isMainnet ? CELO_MAINNET_RPC : CELO_TESTNET_RPC;

  if (!rpcUrl) {
    throw new Error(
      `Missing .env value for ${isMainnet ? "CELO_MAINNET_RPC" : "CELO_TESTNET_RPC"}`
    );
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
