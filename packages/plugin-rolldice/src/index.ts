import { Plugin } from "@elizaos/core";
import { rollDiceAction } from "./actions/firstAction.ts"

export const rolldicePlugin: Plugin = {
    name: "rolldice",
    description: "A plugin for simulating dice rolls",
    actions: [rollDiceAction],
    evaluators: [],
    services: [],
    providers: [],
};
