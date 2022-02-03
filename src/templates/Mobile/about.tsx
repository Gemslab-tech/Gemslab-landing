import Link from "next/link";
import styled from "styled-components";

import { H2, P, Row, Container, FullContainer, Column } from "@/styles/styled";
import Header from "@/templates/Common/header";

const AboutText = styled(P)`
  margin-top: 30px;
  text-align: center;
`;

const ExtendedContainer = styled(Container)`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
`;

const SolRow = styled(Row)`
  bottom: 40px;
  position: absolute;
  align-items: center;
`;

const SolLogo = styled.img`
  width: 34px;
  margin-right: 20px;
`;

const ActionRow = styled(Row)`
  margin-top: 40px;
`;

const Presale = styled.button`
  font-size: 16px;
  color: white;
  border-radius: 30px;
  padding: 12px 60px;
  background: linear-gradient(270deg, #009688 7.12%, rgb(36, 62, 147) 96.59%);
  // background: linear-gradient(90deg, #712972 0%, #443BA8 96.93%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  text-align: center;
  border: none;
`;

const H2CAP = styled(H2)`
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
`;

const InfoColumn = styled(Column)`
  margin: auto;
  max-width: 800px;
  width: 100%;
  align-items: center;
`;

const Index = () => {
  return (
    <FullContainer>
      <Container>
        <Header />
      </Container>
      <ExtendedContainer>
        <InfoColumn>
          <H2CAP>All in one platform to build the next crypto gem</H2CAP>
          <AboutText>
            We aim to provide a set of tools which will make development super
            easy on Solana blockchain.
          </AboutText>

          <ActionRow>
            <Link href="/">
              <Presale>Join our newsletter</Presale>
            </Link>
          </ActionRow>
          <SolRow>
            <SolLogo src="/icons/solana-logo.png" />
            <P> Powered by Solana</P>
          </SolRow>
        </InfoColumn>
      </ExtendedContainer>
    </FullContainer>
  );
};

export default Index;
