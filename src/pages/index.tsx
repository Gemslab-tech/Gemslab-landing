import { NextPage } from "next";

import { Meta } from "@/layout/Meta";
import About from "@/templates/Desktop/about";
import { Main } from "@/templates/Main";
import AboutMobile from "@/templates/Mobile/about";

interface Props {
  isMobile: boolean;
}

const Index: NextPage<Props> = ({ isMobile }) => {
  return (
    <Main
      meta={
        <Meta
          title="SolRider"
          description="The first play and earn bike racing game built on blockhain"
        />
      }
      isMobile={isMobile}
    >
      {isMobile ? <AboutMobile /> : <About />}
    </Main>
  );
};

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const isMobile = Boolean(
    // @ts-ignore
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { isMobile };
};

export default Index;
