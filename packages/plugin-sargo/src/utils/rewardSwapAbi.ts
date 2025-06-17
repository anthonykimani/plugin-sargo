export const RewardSwapAbi = [
    {
        type: "constructor",
        stateMutability: "nonpayable",
        inputs: [
            { internalType: "uint256", name: "_rewardAmount", type: "uint256" },
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "address", name: "_rewardToken", type: "address" },
        ],
    },

    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [{ internalType: "address", name: "account", type: "address" }],
    },
    { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },

    {
        type: "event",
        name: "FundsWithdrawn",
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "recipient", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
    },
    {
        type: "event",
        name: "RewardAmountUpdated",
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint256", name: "newAmount", type: "uint256" },
        ],
    },
    {
        type: "event",
        name: "Rewarded",
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "user", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
        ],
    },
    {
        type: "function",
        name: "contractBalance",
        stateMutability: "view",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    },
    {
        type: "function",
        name: "owner",
        stateMutability: "view",
        inputs: [],
        outputs: [{ internalType: "address", name: "", type: "address" }],
    },
    {
        type: "function",
        name: "renounceOwnership",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
    },
    {
        type: "function",
        name: "rewardAmount",
        stateMutability: "view",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    },
    {
        type: "function",
        name: "rewardFirstSwap",
        stateMutability: "nonpayable",
        inputs: [{ internalType: "address", name: "user", type: "address" }],
        outputs: [],
    },
    {
        type: "function",
        name: "rewardToken",
        stateMutability: "view",
        inputs: [],
        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    },
    {
        type: "function",
        name: "rewarded",
        stateMutability: "view",
        inputs: [{ internalType: "address", name: "", type: "address" }],
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
    },
    {
        type: "function",
        name: "setRewardAmount",
        stateMutability: "nonpayable",
        inputs: [{ internalType: "uint256", name: "_newAmount", type: "uint256" }],
        outputs: [],
    },
    {
        type: "function",
        name: "transferOwnership",
        stateMutability: "nonpayable",
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        outputs: [],
    },
    {
        type: "function",
        name: "withdraw",
        stateMutability: "nonpayable",
        inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
        ],
        outputs: [],
    },
];
