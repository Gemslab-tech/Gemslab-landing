import styled from "styled-components";

import {
  H3,
  Row,
  Container,
  Column,
  FullContainerReverted,
} from "@/styles/styled";
import { teamList } from "@/utils/teamData";

const ExtendedContainer = styled(Container)`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled(H3)`
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background: ${({ theme }) => theme.neutral};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 20px;
  span {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const InfoColumn = styled(Column)`
  margin: auto;
  max-width: 800px;
  width: 100%;
  align-items: center;
`;

const TeamRow = styled(Row)`
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;
const TeamMemberColumn = styled(Column)`
  width: 33%;
  margin-bottom: 100px;
  p {
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.neutral};
    img {
      width: 16px;
      margin-left: 10px;
    }
  }
  p:nth-child(3) {
    text-align: center;
    color: ${({ theme }) => theme.accent};
    padding-top: 16px;
    font-size: 13px;
  }
`;

const ProfilePhoto = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`;

interface MemberProps {
  name: string;
  designation: string;
  linkedinUrl: string;
  photo: string;
}

const TeamMember = (props: MemberProps) => {
  return (
    <TeamMemberColumn>
      <ProfilePhoto>
        <img src={props.photo} />
      </ProfilePhoto>
      <p>
        {props.name}
        <a target="_blank" href={props.linkedinUrl} rel="noreferrer">
          <img src="/icons/linkedin.svg" />
        </a>
      </p>
      <p>{props.designation}</p>
    </TeamMemberColumn>
  );
};

const Index = () => {
  return (
    <FullContainerReverted>
      <ExtendedContainer>
        <InfoColumn>
          <Heading>
            TEAM
            <span />
          </Heading>
        </InfoColumn>
        <TeamRow>
          {teamList.map((item) => (
            <TeamMember {...item} key={item.name} />
          ))}
        </TeamRow>
      </ExtendedContainer>
    </FullContainerReverted>
  );
};

export default Index;
