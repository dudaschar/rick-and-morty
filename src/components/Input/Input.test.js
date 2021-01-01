import React from 'react';
import { render } from 'src/testUtils/testUtils';

import Input from './Input';

describe('Input Component', () => {
  it('should render properly', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });
});