import styled, { createGlobalStyle } from 'styled-components';

import { colours } from './constants/colours';

export const GlobalStyle = createGlobalStyle`
  html,
  #root {
    height: 100%;
    background-color: ${colours.white};
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: calc(10px + 2vmin);
  font-family: MontserratBlack;
`;
