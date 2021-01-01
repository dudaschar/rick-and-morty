import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../stylesUtils/theme';

const TestingWithProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

TestingWithProviders.propTypes = {
  children: PropTypes.any.isRequired,
};

const customRender = (ui, options) => (
  render(ui,  { wrapper: TestingWithProviders, ...options })
);

export * from '@testing-library/react';
export { customRender as render };
