import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

Wrapper.displayName = 'Wrapper';

export const InputWrapper = styled.div`
  width: 300px;
`;

InputWrapper.displayName = 'InputWrapper';
