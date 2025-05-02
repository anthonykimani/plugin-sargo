import { Plugin, IAgentRuntime } from "@elizaos/core";
import { getBalanceAction } from "./actions/getBalanceAction";
import { BalanceProvider } from "./providers";
import { rewardFirstSwapAction } from "./actions/rewardFirstSwapAction";
import { SwapListenerService } from "./services/swapListenerService";


export const sargoInternPlugin: Plugin = {
    name: "sargoInternPlugin",
    description: "A plugin for interacting with sargoIntern Character",
    actions: [getBalanceAction, rewardFirstSwapAction],
    evaluators: [],
    services: [new SwapListenerService()],
    providers: [new BalanceProvider()],
};
