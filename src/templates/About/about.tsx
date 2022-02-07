import Link from "next/link";
import styled from "styled-components";

import { H2, P, Row, Container, FullContainer, Column } from "@/styles/styled";
import Header from "@/templates/Common/header";

const AboutText = styled(P)`
  margin-top: 45px;
  text-align: center;
`;

const ExtendedContainer = styled(Container)`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 600px) {
    padding-top: 150px;
  }
`;

const SolRow = styled(Row)`
  margin-top: 60px;
  align-items: center;
  @media screen and (min-width: 600px) {
    bottom: 60px;
    position: absolute;
  }
`;

const SolLogo = styled.img`
  width: 24px;
  margin-right: 20px;
`;

const ActionRow = styled(Row)`
  margin-top: 40px;
`;

const Presale = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.neutral};
  border-radius: 30px;
  padding: 12px 60px;
  background: ${({ theme }) => theme.actionButtonGradient};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  text-align: center;
  border: none;
  margin-top: 20px;
`;

const H2CAP = styled(H2)`
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background: ${({ theme }) => theme.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
          <H2CAP>No code platform for Solana ecosystem</H2CAP>
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