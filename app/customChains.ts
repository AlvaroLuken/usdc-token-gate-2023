import { Chain } from "wagmi";

export const sepoliaCustom = {
  id: 11155111,
  name: "Sepolia",
  network: "sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia ETH",
    symbol: "sepETH",
  },
  rpcUrls: {
    public: {
      http: [
        `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ],
    },
    default: {
      http: [
        `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ],
    },
  },
  blockExplorers: {
    etherscan: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
    default: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
  },
} as const satisfies Chain;
