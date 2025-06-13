import {
  toHex,
  createPublicClient,
  http,
  createWalletClient,
  formatEther,
  PublicClient,
  WalletClient,
  webSocket,
} from "viem";
import { celo, celoAlfajores} from "viem/chains";
import { privateKeyToAccount, nonceManager } from "viem/accounts";
import * as dotenv from "dotenv";
dotenv.config();


const { SARGO_AGENT_PRIVATE_KEY, WEB_RPC } = process.env;

export function createClients(): {
  publicClient: PublicClient;
  deployer: WalletClient;
  account: any;
}  {
  // Creates an Account from a private key.
  const account = privateKeyToAccount(`0x${SARGO_AGENT_PRIVATE_KEY??""}`, { nonceManager });

  console.log("privateKeyToAccount", account)

    const isProduction = process.env.NODE_ENV === "production";

  // Creates a publicClient
  const publicClient = createPublicClient({
    chain: isProduction ? celo : celoAlfajores,
    transport: webSocket(WEB_RPC),
  });
  

  // create a walletClient
  const deployer = createWalletClient({
    account: account,
    chain: isProduction ? celo : celoAlfajores,
    transport: webSocket(WEB_RPC),
  });

  return { publicClient: publicClient as PublicClient & { account: undefined }, deployer, account };
}
