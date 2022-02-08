import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

// @ts-ignore
import { GlobalStyles } from "@/styles/globalstyle";
// @ts-ignore
import { darkTheme } from "@/styles/theme";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={darkTheme}>
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WMKDH8TKSF"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "G-WMKDH8TKSF");
          `}
      </script>
      <GlobalStyles />
      <body>
        <Component {...pageProps} />
      </body>
    </>
  </ThemeProvider>
);

export default MyApp;
