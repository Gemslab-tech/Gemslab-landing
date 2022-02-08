import styled from "styled-components";

import { Column, Row, Container, FullContainer } from "@/styles/styled";
import { AppConfig } from "@/utils/AppConfig";

const FooterContainer = styled(FullContainer)`
  min-height: 50vh;
  padding: 30px 0 30px 0;
`;

const SocialRow = styled(Row)`
  margin: 50px 0 0 0;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 20px;
  display: inline-block;
  padding-top: 10px;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;

const Link = styled.a`
  font-size: 13px;
  padding: 10px 0;
  color: #d4e3ff;
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
`;

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinksRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const LinksContainer = styled(Column)`
  width: 23%;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #d4e3ff;
  margin-bottom: 20px;
  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
`;

const Copyright = styled(Row)`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
  }
  span {
    color: #d4e3ff;
    font-size: 14px;
    text-align: center;
    margin-left: 14px;
  }
`;

type IMainProps = {
  isMobile: boolean;
};

const Index = (props: IMainProps) => {
  const { isMobile } = props;
  return (
    <FooterContainer>
      <Container>
        <CustomContainer>
          <LinksRow>
            <LinksContainer>
              <Label>About</Label>
              <Link href="/" target="_blank">
                Read docs
              </Link>

              <Link href="#team">Team</Link>
              <Link href="#">Coinmarketcap</Link>
              <Link href="#">Coingecko</Link>
            </LinksContainer>

            <LinksContainer>
              <Label>Useful links</Label>
              <Link href="#">How it works?</Link>
              <Link href="#">Tiers & structure</Link>
              <Link href="#">Features</Link>
              <Link href="#">Roadmap</Link>
            </LinksContainer>

            {!isMobile && (
              <LinksContainer>
                <Label>Social</Label>
                <Link href="https://twitter.com/gemslab_space" target="_blank">
                  Twitter
                </Link>
                <Link href="/" target="_blank">
                  Telegram
                </Link>
                <Link href="https://discord.gg/kavNEPekdy" target="_blank">
                  Discord
                </Link>
                <Link href="/" target="_blank">
                  Medium
                </Link>
              </LinksContainer>
            )}
            <LinksContainer>
              <Label>Legal</Label>
              <Link href="mailto:support@gemslab.space">Contact us</Link>
              <Link>Terms of service</Link>
              <Link>Privacy policy</Link>
            </LinksContainer>
          </LinksRow>
        </CustomContainer>
        <SocialRow>
          <SocialLink href="https://twitter.com/gemslab_space" target="_blank">
            <img src="/icons/twitter.svg" />
          </SocialLink>
          <SocialLink href="https://discord.gg/kavNEPekdy" target="_blank">
            <img src="/icons/discord.svg" />
          </SocialLink>
          <SocialLink href="" target="_blank">
            <img src="/icons/medium.svg" />
          </SocialLink>
          <SocialLink href="" target="_blank">
            <img src="/icons/telegram.svg" />
          </SocialLink>
        </SocialRow>
        <Copyright>
          <img src="/logo/logo-sm.svg" />{" "}
          <span>
            © Copyright {new Date().getFullYear()} {AppConfig.title}.
          </span>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Index;
