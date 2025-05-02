import { type Action, type HandlerCallback, type IAgentRuntime, type Memory, type State } from "@elizaos/core";

export const rollDiceAction: Action = {
    name: "rollDice",
    description: "Roll a dice",
    similes: ["roll a die", "roll a dice", "roll a d20", "roll a d100"],
    validate: async (runtime, message) => {
        const text = message.content.text?.toLowerCase() ?? '';
        return text.includes("roll") || text.includes("dice") || text.includes("roll a d20") || text.includes("roll a d100");
    },
    handler: async (runtime: IAgentRuntime, memory: Memory, state: State, _options: any, callback: HandlerCallback) => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        if (callback) {
            await callback({
                text: `I rolled ${randomNumber}`,
            })
        }
        return true;
    },
    examples: [
        [
            {
                user: "{{user}}",
                content: {
                    text: "Roll a d20",
                }
            },
            {
                user: "{{agent}}",
                content: {
                    text: "I rolled a dice for you and got 42",
                    thought: "User asked me to roll a dice",
                    actions: ["ROLL_DICE"],
                }
            }
        ]
    ]
}