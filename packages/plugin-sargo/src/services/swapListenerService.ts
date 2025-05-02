import { Service, ServiceType, type IAgentRuntime } from "@elizaos/core";
import { startSwapListener } from "../services/swapEventListener";

export class SwapListenerService extends Service {
    static override serviceType: ServiceType = ServiceType.CUSTOM;

    async initialize(runtime: IAgentRuntime): Promise<void> {
        console.log("[SwapListenerService] Initializing swap listener...");
        await startSwapListener(runtime);
    }
}
