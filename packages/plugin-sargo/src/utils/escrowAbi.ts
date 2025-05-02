export const escrowAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "AgentConfirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "ClientConfirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "RequestAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "TransactionCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "resolution",
          "type": "string"
        }
      ],
      "name": "TransactionClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "TransactionCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "TransactionDisputed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "TransactionInitiated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "resolution",
          "type": "string"
        }
      ],
      "name": "TransactionResolved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "TransactionStatus",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct SargoBase.Transaction",
          "name": "txn",
          "type": "tuple"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        }
      ],
      "name": "acceptDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "acountHistory",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        }
      ],
      "name": "agentConfirmPayment",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "cancelTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_resolution",
          "type": "string"
        }
      ],
      "name": "claimTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        }
      ],
      "name": "clientConfirmPayment",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_currencyCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_conversionRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "credit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "disputeTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getAcountHistoryLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "getAgentFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAgentFeeRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getEarnings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "totalEarned",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct SargoBase.Earning",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        }
      ],
      "name": "getTransactionById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "refNumber",
              "type": "string"
            },
            {
              "internalType": "enum SargoBase.TransactionType",
              "name": "txType",
              "type": "uint8"
            },
            {
              "internalType": "enum SargoBase.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "currencyCode",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "netAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "treasuryFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "clientAccount",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "agentAccount",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "clientPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "clientName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentPhoneNumber",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "agentName",
                  "type": "string"
                }
              ],
              "internalType": "struct SargoBase.CounterParty",
              "name": "account",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "paymentMethod",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "clientApproved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "agentApproved",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "clientKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "requestIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "clientPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentPairedIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "businessNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "internalType": "struct SargoBase.Transaction",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransferFeeRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "getTreasuryFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTreasuryFeeRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_treasuryAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_feeAddress",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_currencyCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_conversionRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_paymentMethod",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_businessNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_clientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_clientPhoneNumber",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_agentAccount",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_agentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_agentPhoneNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "initiateDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_currencyCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_conversionRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_paymentMethod",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_businessNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_agentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_agentPhoneNumber",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_clientAccount",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_clientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_clientPhoneNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "initiateWithdrawal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextTxId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum SargoBase.Status",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "paired",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pairing",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_clientRefundAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_agentRefundAmount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_resolution",
          "type": "string"
        }
      ],
      "name": "refundTransaction",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum SargoBase.Status",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "requests",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_currencyCode",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_conversionRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        }
      ],
      "name": "setRefNumber",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "enum SargoBase.Status",
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "transactionStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treasuryAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_txnId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_resolution",
          "type": "string"
        }
      ],
      "name": "voidTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;
