import "@cardinal/namespaces-components/dist/esm/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  SolletWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  IDENTITIES,
  IdentityName,
  WalletIdentityProvider,
} from "@cardinal/namespaces-components";
import { FC, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import theme from "../theme";
import { AppProps } from "next/app";
// import { Nav } from "../components/Nav";
import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base/lib/types/";
require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp({
  Component,
  pageProps,
  // identityName, // = 'twitter',
  // cluster, // = "mainnet-beta",
}: AppProps) {
// & { identityName: IdentityName; cluster: string }) 
  //   const MyApp: FC<AppProps & {identityName: IdentityName, cluster: string}> = ({
  //   Component,
  //   pageProps,
  //   identityName,
  //   cluster,
  // }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  // enum WalletAdapterNetwork {
  //   Mainnet = "mainnet-beta",
  //   Testnet = "testnet",
  //   Devnet = "devnet",
  // }

  // const network = WalletAdapterNetwork.Mainnet;
  // console.log(cluster);
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(
    () => "https://solana-api.projectserum.com",
    []
  );

  // const endpoint = process.env.CARDINAL_RPC || 'https://solana-api.projectserum.com' // useMemo(() => clusterApiUrl(network), [network]);
  console.dir(endpoint);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SolletWalletAdapter(),
      // new SolflareWalletAdapter({ network }),
      // new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta
          name="keywords"
          content="moonshine labs, metaverse, virtual real estate, vrmmorpg"
        />
        <meta name="author" content="Moonshine Labs" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      {/* <EnvironmentProvider defaultCluster="mainnet-beta"> */}
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <WalletIdentityProvider identities={[IDENTITIES["twitter"]]}>
                <Component {...pageProps} />
              </WalletIdentityProvider>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      {/* </EnvironmentProvider> */}
    </ChakraProvider>
  );
}
// MyApp.getInitialProps = getInitialProps;

export default MyApp;
