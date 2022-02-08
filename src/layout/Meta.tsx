import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "@/utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/icons/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href={`${router.basePath}/icons/apple-icon-57x57.png`}
          key="icon57"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href={`${router.basePath}/icons/apple-icon-60x60.png`}
          key="icon32"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href={`${router.basePath}/icons/apple-icon-72x72.png`}
          key="icon72"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="114x114"
          href={`${router.basePath}/icons/apple-icon-114x114.png`}
          key="icon114"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href={`${router.basePath}/icons/apple-icon-120x120.png`}
          key="icon114"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href={`${router.basePath}/icons/apple-icon-120x120.png`}
          key="icon120"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${router.basePath}/icons/android-icon-192x192.png`}
          key="icon120"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/icons/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${router.basePath}/icons/favicon-96x96.png`}
          key="icon96"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/icons/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/icons/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
