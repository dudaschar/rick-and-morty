import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.huge};
`;

PaginationContainer.displayName = 'PaginationContainer';