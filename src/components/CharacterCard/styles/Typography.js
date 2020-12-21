import styled from 'styled-components';

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`

CardTitle.displayName = 'CardTitle';
