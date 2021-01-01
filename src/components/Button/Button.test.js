import React from 'react';
import { render } from 'src/testUtils/testUtils';

import Button from './Button';

describe('Button Component', () => {
  it('should render the component properly', () => {
    const { asFragment } = render(
      <Button>Click</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
