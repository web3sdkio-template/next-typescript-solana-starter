import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  // Here's how to get the web3sdkio SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/web3sdkio.svg"
            height={75}
            width={115}
            style={{
              objectFit: "contain",
            }}
            alt="web3sdkio"
          />
          <Image
            width={75}
            height={75}
            src="/sol.png"
            className={styles.icon}
            alt="sol"
          />
        </div>
        <h1 className={styles.h1}>Solana, meet web3sdkio 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with web3sdkio&rsquo;s brand new{" "}
          <b>
            <a
              href="https://docs.web3sdk.io/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <WalletMultiButtonDynamic />
      </div>
    </>
  );
};

export default Home;
