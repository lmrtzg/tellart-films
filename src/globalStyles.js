import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Courier Prime', monospace;
  }

  :root {
    --black: #191919;
    --yellow: #f2df38;
    --white: #eee;
  }

  h1, h2, h3, h4, p, span, a {
    color: var(--black);
  }

  a {
    text-decoration: none;
  }
`;

export const breakpoints = {
  xsm: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
};
