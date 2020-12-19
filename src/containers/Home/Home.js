import React from 'react';

import Input from 'src/components/Input/Input';
import { Wrapper, InputWrapper } from './styles/Wrapper';
import { Title } from './styles/Typography';

function Home() {
  return (
    <Wrapper>
      <Title>Search for a Rick and Morty&apos;s character</Title>
      <InputWrapper>
        <Input />
      </InputWrapper>
    </Wrapper>
  );
}

export default Home;
