import { NextPage } from "next";

import { Meta } from "@/layout/Meta";
import About from "@/templates/About/about";
import { Main } from "@/templates/Main";
import Team from "@/templates/Team/team";

interface Props {
  isMobile: boolean;
}

const Index: NextPage<Props> = ({ isMobile }) => {
  return (
    <Main meta={<Meta title="Gemslab" description="" />} isMobile={isMobile}>
      <About />
      <Team />
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
