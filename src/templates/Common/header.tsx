import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Row } from "@/styles/styled";

const LogoRow = styled(Row)`
  padding-top: 10px;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    width: 40px;
  }
  span {
    color: white;
    font-weight: 300;
    margin-left: 26px;
    font-size: 14px;
    position: absolute;
    left: 24px;
    top: 20px;
    letter-spacing: 1px;
  }
`;

const LinksRow = styled(Row)`
  margin-left: auto;
  align-items: center;
`;

const Index = () => {
  const router = useRouter();

  return (
    <Row className="header">
      <Link href="/">
        <LogoRow>
          <img src={`${router.basePath}/logo/logo-gem.svg`} />
          <span> GEMSLAB</span>
        </LogoRow>
      </Link>

      <LinksRow></LinksRow>
    </Row>
  );
};

export default Index;
