import type { Provider, IAgentRuntime, Memory, State } from "@elizaos/core";


export class AddressProvider implements Provider {
    async get(
        _lengthruntime: IAgentRuntime,
        message: Memory,
        _state?: State
    ): Promise<string> {
        try {
            const content =
                typeof message.content === "string"
                    ? message.content
                    : message.content?.text;

            if (!content) {
                console.log("No message content provided");
            }

            // Extract Address from content
            const addressIdentifier = this.extractAddress(content);
            if (!addressIdentifier) {
                console.log("❌ No address found");

                return null;
            }

            return addressIdentifier;
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    private extractAddress(content: string): string | null {
        const address = content.match(/0x[a-fA-F0-9]{40}/);
        
        if (address) {
            console.log("Address identified", address[0]);
            return address[0];
        }
    
        console.log("No address found");
        return null;
    }
}