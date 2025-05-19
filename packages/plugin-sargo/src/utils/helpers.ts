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
import * as chains from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import * as dotenv from "dotenv";
dotenv.config();


const { SARGO_AGENT_PRIVATE_KEY } = process.env;

const RPC_HTTP  = 'https://alfajores-forno.celo-testnet.org';
const RPC_WS    = 'wss://alfajores-forno.celo-testnet.org/ws';

export function createClients(): {
  publicClient: PublicClient;
  deployer: WalletClient;
  account: any;
}  {
  // Creates an Account from a private key.
  const account = privateKeyToAccount(`0x${SARGO_AGENT_PRIVATE_KEY??""}`);

  console.log("privateKeyToAccount", account)

  // Creates a publicClient
  const publicClient = createPublicClient({
    chain: chains.celoAlfajores,
    transport: webSocket(RPC_WS),
  });
  

  // create a walletClient
  const deployer = createWalletClient({
    account: account,
    chain: chains.celoAlfajores,
    transport: http(RPC_HTTP),
  });

  return { publicClient: publicClient as PublicClient & { account: undefined }, deployer, account };
}
