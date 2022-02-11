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
    margin-left: 12px;
    font-size: 15px;
    position: absolute;
    left: 24px;
    top: 18px;
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
          <img src={`${router.basePath}/logo/newlogo.svg`} />
          <span> GEMSLAB</span>
        </LogoRow>
      </Link>

      <LinksRow></LinksRow>
    </Row>
  );
};

export default Index;
