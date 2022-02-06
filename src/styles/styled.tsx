import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FullContainer = styled.div`
  background: ${({ theme }) => theme.bgGradient};
  min-height: 100vh;
  width: 100vw;
`;

export const FullContainerReverted = styled.div`
  background: ${({ theme }) => theme.bgGradientRevert};
  min-height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

export const H1 = styled.h1`
  font-size: 42px;
  line-height: 60px;
  font-weight: bold;
  color: white;
  @media only screen and (min-width: 600px) {
    font-size: 55px;
    line-height: 80px;
  }
`;

export const H2 = styled.h1`
  font-size: 36px;
  line-height: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.neutral};
  @media only screen and (min-width: 600px) {
    font-size: 44px;
    line-height: 64px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.neutral};
`;
