import React from 'react';
import PropTypes from 'prop-types';

import { BaseButton } from './styles/BaseButton';

function Button(props) {
  return (
    <BaseButton
      {...props}
    />
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
};

export default Button;