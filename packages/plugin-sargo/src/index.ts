import { Plugin, IAgentRuntime } from "@elizaos/core";
import { getBalanceAction } from "./actions/getBalanceAction";
import { AddressProvider } from "./providers";
import { getUserDataAction } from "./actions/getUserDataAction";


export const sargoInternPlugin: Plugin = {
    name: "sargoInternPlugin",
    description: "A plugin for interacting with sargoIntern Character",
    actions: [getBalanceAction, getUserDataAction],
    evaluators: [],
    services: [],
    providers: [new AddressProvider()],
};
