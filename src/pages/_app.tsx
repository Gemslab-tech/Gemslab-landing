import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Component {...pageProps} />
    </body>
  </>
);

export default MyApp;
