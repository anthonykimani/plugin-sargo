export interface IReward {
    txId: number,
    userAccount: string,
    amount: number,
    tokenName: string,
    timestamp: number,
    rewardType: string,
    rewardStage: string,
    contractAddress: string,
    eventName: string
}

