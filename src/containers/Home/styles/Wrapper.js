import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
`;

Wrapper.displayName = 'Wrapper';

export const SearchWrapper = styled.div`
  max-width: 300px;
  display: flex;
  height: 62px;
`;

SearchWrapper.displayName = 'SearchWrapper';
