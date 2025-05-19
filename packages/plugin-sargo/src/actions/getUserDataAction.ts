import { type Action, type HandlerCallback, type IAgentRuntime, type Memory, type State } from "@elizaos/core";
import { AUTH, IAuth } from "../interfaces/IAuth";
import { IResponse } from "../interfaces/IResponse";
import { getByAddress } from "../utils/AccountService";
import { AddressProvider } from "../providers";

export const getUserDataAction: Action = {
    name: "get_user_data",
    description: "fetches a user's data",
    similes: ["user records", "user info", "user details"],
    validate: async (runtime, message) => {
        const text = message.content.text?.toLowerCase() ?? "";
        return (
            text.includes("get user data") ||
            text.includes("fetch user info") ||
            text.includes("search user") ||
            text.includes("find data")
        );
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: any,
        callback: HandlerCallback
    ) => {

        // Get the provider
        const provider = runtime.providers.find(p => p instanceof AddressProvider);
        if (!provider) {
            throw new Error("Address not found");
        }


        const address = await provider.get(runtime, message, state)
        console.log(`Fetching data for user ${address} `)

        try {
            if (address) {
                console.log(`Getting User Data by Address`)
                let _res: IResponse = await getByAddress({
                    ...AUTH,
                    address: address,
                });

                if (_res.status === 200 && _res.payload.data) {
                    const {
                        address,
                        firstname,
                        lastname,
                        onboardType,
                        phoneNumberConfirmStatus,
                        phoneNumberConfirmed,
                        emailConfirmStatus,
                        emailConfirmed,
                        registered,
                        userTier,
                    } = _res.payload.data;

                    console.log(`
                👤 **User Overview**
                - **Name**: ${firstname || ''} ${lastname || ''}
                - **Wallet Address**: ${address}
                - **Onboarding Status**: ${onboardType}
                - **Phone Confirmed**: ${phoneNumberConfirmed ? '✅ Confirmed' : '❌ Not Confirmed'} (${phoneNumberConfirmStatus})
                - **Email Confirmed**: ${emailConfirmed ? '✅ Confirmed' : '❌ Not Confirmed'} (${emailConfirmStatus})
                - **Registration Complete**: ${registered ? '✅ Yes' : '❌ No'}
                    `.trim());

                    await callback({
                        text: `
                👤 **User Overview**
                - **Name**: ${firstname || ''} ${lastname || ''}
                - **Wallet Address**: ${address}
                - **Onboarding Status**: ${onboardType}
                - **Phone Confirmed**: ${phoneNumberConfirmed ? '✅ Confirmed' : '❌ Not Confirmed'} (${phoneNumberConfirmStatus})
                - **Email Confirmed**: ${emailConfirmed ? '✅ Confirmed' : '❌ Not Confirmed'} (${emailConfirmStatus})
                - **Registration Complete**: ${registered ? '✅ Yes' : '❌ No'}
                    `.trim(),
                    })
                } else {
                    await callback({
                        text: `user data status text is ${JSON.stringify(_res.message)}`,
                    })
                }
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
                content: { text: "Can you fetch user info for the wallet address 0xfA1316fE4b4a572F5F701f75A97bae933a24B748" },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "User is asking for user info for the wallet address 0xfA1316fE4b4a572F5F701f75A97bae933a24B748",
                    actions: ["GET_USER_DATA"],
                },
            },
        ],
        [
            {
                user: "{{user}}",
                content: { text: "What’s the user record of this wallet 0xfA1316fE4b4a572F5F701f75A97bae933a24B748...?" },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "",
                    thought: "User wants account info for a wallet address",
                    actions: ["GET_USER_DATA"],
                },
            },
        ],
    ]
}