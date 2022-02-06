import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Inter, -apple-system, serif;
    -webkit-font-smoothing: antialiased;
    transition: all 0.50s linear;
  }
  *{
    margin: 0;
    box-sizing: border-box;
    }
  `;
