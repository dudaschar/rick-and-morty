import styled from 'styled-components';

export const Text = styled.span`
  padding: ${({ theme }) => `0 ${theme.spacing.medium}`};
`;

Text.displayName = 'Text';
