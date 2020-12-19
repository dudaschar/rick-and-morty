import React from 'react';

import { BaseInput } from './styles/BaseInput';

function Input(props) {
  return (
    <BaseInput
      type="text"
      {...props} 
    />
  );
}


export default Input;