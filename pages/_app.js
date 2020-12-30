import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'src/stylesUtils/globalStyles';
import theme from 'src/stylesUtils/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
