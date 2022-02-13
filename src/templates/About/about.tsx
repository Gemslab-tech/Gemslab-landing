import { useState } from "react";

import styled from "styled-components";

import { H1, P, Row, Container, FullContainer, Column } from "@/styles/styled";
import Header from "@/templates/Common/header";
import { firebaseUrl } from "@/utils/AppConfig";

const AboutText = styled(P)`
  margin-top: 45px;
  text-align: center;
  color: #cfcfcf;
  max-width: 500px;
  font-size: 17px;
`;

const ExtendedContainer = styled(Container)`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 600px) {
    padding-top: 110px;
  }
`;

const SolRow = styled(Row)`
  margin-top: 40px;
  align-items: center;
  @media screen and (min-width: 600px) {
    margin-top: 100px;
  }
`;

const SolLogo = styled.img`
  width: 24px;
  margin-right: 20px;
`;

const ActionRow = styled(Column)`
  margin-top: 50px;
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.neutral};
    display: inline-block;
    margin-bottom: 20px;
  }
  button {
    position: absolute;
    background-color: transparent;
    bottom: 24px;
    right: 20px;
    border: none;
    font-size: 16px;
    color: #a35cff;
    font-weight: 600;
    cursor: pointer;
  }
  p {
    font-size: 13px;
    bottom: -30px;
    color: #ff5151;
    left: 2px;
    position: absolute;
  }
`;

const SuccessRow = styled(Column)`
  margin-top: 50px;
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #bbbbbbbf;
  padding: 12px 10px;
  border-radius: 4px;
  span {
    font-size: 20px;
    color: rgb(243 97 156);
    display: inline-block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: white;
    margin-left: auto;
    margin-right: auto;

    a {
      color: #7f94ff;
      font-weight: 600;
    }
  }
`;

const Overlay = styled.img`
  position: absolute;
  opacity: 0.3;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%;
  top: 80px;
  @media screen and (min-width: 600px) {
    top: 50px;
  }
`;

const H2CAP = styled(H1)`
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(90deg, #26b693 1.89%, #269cb6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InfoColumn = styled(Column)`
  margin: auto;
  max-width: 800px;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  background: ${({ theme }) => theme.neutral};
  font-size: 16px;
  width: 100%;
  padding: 24px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

const validateEmail = (email: String) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Index = () => {
  const [email, updateEmail] = useState("");
  const [error, updateError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, UpdateEmailSent] = useState(false);

  const submitEmail = () => {
    if (!validateEmail(email)) {
      updateError(true);
      return;
    }
    setLoading(true);
    updateError(false);
    const postData = {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    };
    fetch(firebaseUrl, postData).then(() => {
      UpdateEmailSent(true);
      setLoading(false);
    });
  };

  return (
    <FullContainer>
      <Container>
        <Header />
      </Container>
      <Overlay src="/assets/bg-2.png" />
      <ExtendedContainer>
        <InfoColumn>
          <H2CAP>No code platform for Solana ecosystem</H2CAP>
          <AboutText>
            We aim to provide a set of tools which will make development super
            easy on Solana blockchain.
          </AboutText>

          {emailSent ? (
            <SuccessRow>
              <span>Subscribed successfully.</span>
              <p>
                Consider filling our{" "}
                <a
                  href="https://airdrop.gemslab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  survey
                </a>{" "}
                to help us make an awesome product.
              </p>
            </SuccessRow>
          ) : (
            <ActionRow>
              <span>Get early access.</span>
              <Input
                value={email}
                disabled={loading}
                onChange={(e) => {
                  updateEmail(e.target.value);
                }}
              />
              <button onClick={submitEmail}>I want it!</button>
              {error && <p>Email Id is invalid!</p>}
            </ActionRow>
          )}
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
