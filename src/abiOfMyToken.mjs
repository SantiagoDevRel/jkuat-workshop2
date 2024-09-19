const ABI = [
  { inputs: [{ internalType: "string", name: "_newName", type: "string" }], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  { inputs: [], name: "burn10tokens", outputs: [], stateMutability: "nonpayable", type: "function" },
  { inputs: [], name: "mint10tokens", outputs: [], stateMutability: "nonpayable", type: "function" },
  { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
  { inputs: [{ internalType: "address", name: "_receiver", type: "address" }], name: "transfer10tokens", outputs: [], stateMutability: "nonpayable", type: "function" },
];

export default ABI;
