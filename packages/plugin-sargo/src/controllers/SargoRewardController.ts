import { IAgentRuntime } from "@elizaos/core";
import { apiOptions } from "../res/api.config";
import { IReward } from "../interfaces/IReward";
import Http from "../shared/Http";
import * as dotenv from "dotenv";
import { RewardSwapAbi } from "../abis/rewardSwapAbi";
import { createClients } from "../utils/helpers";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const isProd = process.env.NODE_ENV === "production";

const REWARD_CONTRACT_ADDRESS = (isProd
    ? process.env.SARGO_REWARD_MAINNET_CONTRACT_ADDRESS
    : process.env.SARGO_REWARD_TESTNET_CONTRACT_ADDRESS) as `0x${string}`;

export class SargoRewardService {
    constructor(private runtime: IAgentRuntime) { }

    async saveToElizaMemory(userAddress: `0x${string}`, txHash: string) {
        const memory = {
            userId: userAddress,
            agentId: "agent-id",
            content: {
                text: `🎉 User ${userAddress} was rewarded. Tx: ${txHash}`,
            },
            roomId: "roomId",
        };
        await this.runtime.messageManager.createMemory(memory as any);
    }

    async saveReward(req: IReward) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return await Http.post(`${apiOptions.endPoints.rewards}/add`, _req);
    }


    async saveAllRewards(req: IReward) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.rewards}`, _req);
    }

    async getRewardByUser(req: IReward) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.rewards}/user`, _req);
    }

    async getRewardByTxId(req: IReward) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.rewards}/tx`, _req);
    }

    async getAllRewards(req: IReward) {
        const _req = { ...req, url: apiOptions.endPoints.appBaseUrl };
        return Http.post(`${apiOptions.endPoints.rewards}`, _req);
    }

    async checkIfAlreadyRewarded(userAddress: `0x${string}`): Promise<boolean> {
        const { publicClient } = createClients();

        try {
            return (await publicClient.readContract({
                address: REWARD_CONTRACT_ADDRESS,
                abi: RewardSwapAbi,
                functionName: "rewarded",
                args: [userAddress],
            })) as boolean;
        } catch (err) {
            console.error(`[RewardCheck] ❌ Could not read reward status for ${userAddress}`, err);
            return false;
        }
    }

    async getRewardedTxnId(txnId: BigInt) {
        const { publicClient } = createClients();

        const logs = await publicClient.getContractEvents({
            abi: RewardSwapAbi,
            address: REWARD_CONTRACT_ADDRESS,
            eventName: 'Rewarded',
            args: {
                txnId: txnId,
            }
        })

        console.log('getRewardedTxnId:', logs)
        return logs
    }

    async getRewardedUser(user: `0x${string}`) {
        const { publicClient } = createClients();

        const logs = await publicClient.getContractEvents({
            abi: RewardSwapAbi,
            address: REWARD_CONTRACT_ADDRESS,
            eventName: 'Rewarded',
            args: {
                user: user,
            },
        })

        console.log('getRewardedUser:', logs)
        return logs
    }

    async getAllRewardedEvents() {
        const { publicClient } = createClients();

        const logs = await publicClient.getContractEvents({
            abi: RewardSwapAbi,
            address: REWARD_CONTRACT_ADDRESS,
            eventName: 'Rewarded',
        })

        console.log('getAllRewardedEvents:', logs)
        return logs
    }
}
