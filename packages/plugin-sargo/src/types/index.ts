import { Abi, AbiEvent, AbiParameterToPrimitiveType } from "viem";

export type EscrowTransaction = {
    id: bigint;
    refNumber: string;
    txType: number;
    status: number;
    currencyCode: string;
    conversionRate: bigint;
    totalAmount: bigint;
    netAmount: bigint;
    agentFee: bigint;
    treasuryFee: bigint;
    clientAccount: `0x${string}`;
    agentAccount: `0x${string}`;
    account: {
        clientPhoneNumber: string;
        clientName: string;
        agentPhoneNumber: string;
        agentName: string;
    };
    paymentMethod: string;
    timestamp: bigint;
    clientApproved: boolean;
    agentApproved: boolean;
    clientKey: string;
    agentKey: string;
    requestIndex: bigint;
    clientPairedIndex: bigint;
    agentPairedIndex: bigint;
    businessNumber: string;
    tokenName: string;
    tokenAddress: `0x${string}`;
};
