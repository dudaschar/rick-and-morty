import styled from 'styled-components';

export const Card = styled.a`
  border-radius: 1rem;
  flex-grow: 1;
  max-width: 260px;
  margin: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

Card.displayName = 'Card';

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`

Content.displayName = 'Content';
