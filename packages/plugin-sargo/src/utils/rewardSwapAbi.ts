export const RewardSwapAbi = [
  {
    type: "constructor",
    inputs: [
      { internalType: "uint256", name: "_rewardAmount", type: "uint256" },
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_rewardToken", type: "address" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ internalType: "address", name: "owner", type: "address" }]
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ internalType: "address", name: "account", type: "address" }]
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: []
  },
  {
    type: "event",
    name: "FundsWithdrawn",
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "recipient", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ]
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" }
    ]
  },
  {
    type: "event",
    name: "RewardAmountUpdated",
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "newAmount", type: "uint256" }
    ]
  },
  {
    type: "event",
    name: "RewardTokenUpdated",
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "newToken", type: "address" }
    ]
  },
  {
    type: "event",
    name: "Rewarded",
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "txnId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" }
    ]
  },
  {
    type: "function",
    name: "contractBalance",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rewardAmount",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "rewardFirstSwap",
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "txnId", type: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rewardToken",
    inputs: [],
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "rewarded",
    inputs: [{ internalType: "address", name: "", type: "address" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setRewardAmount",
    inputs: [{ internalType: "uint256", name: "_newAmount", type: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setRewardToken",
    inputs: [{ internalType: "address", name: "newToken", type: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "to", type: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
