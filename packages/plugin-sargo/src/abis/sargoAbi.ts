export const SargoEscrowAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "AgentCancelApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "AgentConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "ClientCancelApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "ClientConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "RequestAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "TransactionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "TransactionCancelling",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "resolution",
        type: "string",
      },
    ],
    name: "TransactionClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "TransactionCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "TransactionDisputed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "TransactionInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "resolution",
        type: "string",
      },
    ],
    name: "TransactionResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "TransactionStatus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clientAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "agentAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct SargoBase.Transaction",
        name: "txn",
        type: "tuple",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
    ],
    name: "acceptBuy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
    ],
    name: "agentApprove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "agentApproveCancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_currencyCode",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_conversionRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paymentMethod",
        type: "string",
      },
      {
        internalType: "address",
        name: "_agentAccount",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_directApproved",
        type: "bool",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "cancelTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_resolution",
        type: "string",
      },
    ],
    name: "claimTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
    ],
    name: "clientApprove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "clientApproveCancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_currencyCode",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_conversionRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "credit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "disputeTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getAgentFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getAgentFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getTransferFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransferFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getTreasuryFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasuryFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
    ],
    name: "getTx",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "refNumber",
            type: "string",
          },
          {
            internalType: "enum SargoBase.TxType",
            name: "txType",
            type: "uint8",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "currencyCode",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "conversionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "netAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasuryFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "clientAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "agentAccount",
            type: "address",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApproved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "clientApprovedCancel",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "agentApprovedCancel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "directApproved",
            type: "bool",
          },
          {
            internalType: "enum SargoBase.Status",
            name: "cancelStatus",
            type: "uint8",
          },
        ],
        internalType: "struct SargoBase.Transaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasuryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_reason",
        type: "string",
      },
    ],
    name: "initiateCancelTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTxId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_clientRefundAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_agentRefundAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_resolution",
        type: "string",
      },
    ],
    name: "refundTx",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_currencyCode",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_conversionRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paymentMethod",
        type: "string",
      },
      {
        internalType: "address",
        name: "_clientAccount",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_directApproved",
        type: "bool",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_currencyCode",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_conversionRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
    ],
    name: "setRefNumber",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "enum SargoBase.Status",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "txStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txnId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_resolution",
        type: "string",
      },
    ],
    name: "voidTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
