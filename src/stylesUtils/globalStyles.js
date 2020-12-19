import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1, h3, p {
    margin: 0;
  }
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.tiny}
  }
  * {
    box-sizing: border-box;
  }
`;