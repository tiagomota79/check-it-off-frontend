import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  #root {
    height: 100%;
    background-color: ${({ theme }) => theme.body};
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Roboto', 'Helvetica Neue',
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
  grid-template-rows: 90px 65px auto;
  place-items: center;
  font-size: calc(10px + 2vmin);
  width: 100%;
`;
