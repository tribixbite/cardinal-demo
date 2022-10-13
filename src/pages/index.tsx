import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
  Container,
  LightMode,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
// import { Hero } from "../components/Hero";
// import { CustomContainer } from "../components/Container";
// import { Main } from "../components/Main";
// import { HamburgerMenu } from "../components/Menu";
// import Mongo from "../components/Mongo";
// import { Footer } from "../components/Footer";

// import Link from 'next/link'
// import dbConnect from "../db/dbConnect";
// import { StakeArray } from "../types_models_interfaces/types";
// import Stakes from "../types_models_interfaces/Stakes";
// import { Sand } from '../components/Sand';
// import { Chart } from "@antv/g2";
import ReactDOM from "react-dom";
import React from "react";
import useSWR from "swr";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { AccountPopover } from "@cardinal/namespaces-components";
import {
  useConnection,
  useWallet,
  WalletContextState,
} from "@solana/wallet-adapter-react";
import { Wallet } from "@saberhq/solana-contrib";
// import { asWallet } from "../providers/cardinal/common/Wallets";
// var styles = require("../styles/Home.module.css");
// Define the components props
interface IndexProps {
  // stakes: StakeArray;
}

export const asWallet = (wallet: WalletContextState): Wallet => {
  return {
    signTransaction: wallet.signTransaction!,
    signAllTransactions: wallet.signAllTransactions!,
    publicKey: wallet.publicKey!,
  };
};
const Home: NextPage = () => {
  //props: IndexProps
  // const { stakes } = props;

  const [stakes, setStakes] = React.useState([]);
  const { connection } = useConnection();
  const wallet = useWallet();
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <Head>
        <title>
          Moonshine Labs - Building Compelling Immersive Experiences
        </title>
        <meta
          name="description"
          content="Building the future, one experience at a time."
        />
        {/* <link rel="preload" href="/api/" as="fetch" crossOrigin="anonymous"></link> */}
      </Head>
      {/* <Hero /> */}
      <WalletMultiButton />
      <AccountPopover
        connection={connection}
        wallet={asWallet(wallet)}
        environment={"mainnet-beta"}
        handleDisconnect={() => wallet.disconnect()}
      />
      <Box>
        {/* <Container minW="1200px"> */}

        {/* <canvas minW="1500px" minH="1500px" overflow="visible" id="ant"></canvas> */}
        <Container minW="1200px" minH="1200px" overflow="" id="ant"></Container>
        {/* <HamburgerMenu /> */}
        <div
        //  className={styles.walletButtons}
        >
          {/* <WalletDisconnectButton /> */}
        </div>
      </Box>
      {/* <LightMode>
        <Mongo />
      </LightMode> */}
    </>
  );
};

export default Home;
