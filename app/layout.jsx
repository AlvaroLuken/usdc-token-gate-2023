"use client";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { arbitrum, goerli, mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Footer from "../components/instructionsComponent/navigation/footer";
import Navbar from "../components/instructionsComponent/navigation/navbar";
import { sepoliaCustom } from "./customChains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, arbitrum, sepoliaCustom, goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_API_KEY,
    walletConnectProjectId: process.env.WALLET_CONNECT_ID,

    // Required
    appName: "You Create Web3 Dapp",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png",
    chains,
  })
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider mode="dark">
          <body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "105vh",
              }}
            >
              <Navbar />
              <div style={{ flexGrow: 1 }}>{children}</div>
              <Footer />
            </div>
          </body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
}
