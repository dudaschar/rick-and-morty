import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `0 ${theme.spacing.small} ${theme.spacing.medium}`};
  text-align: center;
`;

Title.displayName = 'Title';
