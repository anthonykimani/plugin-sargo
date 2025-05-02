import { type Action, type HandlerCallback, type IAgentRuntime, type Memory, type State } from "@elizaos/core";
import { createClients } from "../utils/helpers"
import { BalanceProvider } from "../providers";

export const getBalanceAction: Action = {
    name: "get_wallet_balance",
    description: "Gets the Wallet Balance of an address",
    similes: ["get balance", "check balance", "look up balance"],
    validate: async (runtime, message) => {
        const text = message.content.text?.toLowerCase() ?? '';
        return text.includes("get balance") || text.includes("check balance") || text.includes("look up balance");
    },
    handler: async (runtime: IAgentRuntime, message: Memory, state: State, _options: any, callback: HandlerCallback) => {
        const { publicClient } = createClients();

        // Get the provider
        const provider = runtime.providers.find(p => p instanceof BalanceProvider);
        if (!provider) {
            throw new Error("Address not found");
        }

        const address = await provider.get(runtime, message, state)

        try {
            const balance = await publicClient.getBalance({
                address: address as `0x${string}`
            })
            console.log(`Wallet Balance of ${address} is ${balance}`)

            if(balance > 0) {
                await callback({
                    text: `Wallet Balance of ${address} is ${balance}`,
                })
            }
            return true;
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    },
    examples: [
        [
            {
                user: "{{user}}",
                content: {
                    text: "check balance of the Address 0x99b16591C5A11E4174F30D77F528edf122Ae5b5C ",
                }
            },
            {
                user: "{{agent}}",
                content: {
                    text: "The wallet balance of the address is 4 ETH",
                    thought: "User asked me to fetch the wallet balance of the address",
                    actions: ["GET_WALLET_BALANCE"],
                }
            }
        ]
    ]
}