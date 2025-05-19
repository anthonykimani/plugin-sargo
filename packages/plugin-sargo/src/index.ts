import { Plugin, IAgentRuntime } from "@elizaos/core";
import { getBalanceAction } from "./actions/getBalanceAction";
import { AddressProvider } from "./providers";
import { rewardFirstSwapAction } from "./actions/rewardFirstSwapAction";
import { SwapListenerService } from "./services/swapListenerService";
import { getUserDataAction } from "./actions/getUserDataAction";


export const sargoInternPlugin: Plugin = {
    name: "sargoInternPlugin",
    description: "A plugin for interacting with sargoIntern Character",
    actions: [getBalanceAction, rewardFirstSwapAction, getUserDataAction],
    evaluators: [],
    services: [new SwapListenerService()],
    providers: [new AddressProvider()],
};
