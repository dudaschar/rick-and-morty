import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`
Title.displayName = 'Title';

export const FilterOptions = styled.p`
  font-size: 1.25rem;
`

FilterOptions.displayName = 'FilterOptions';
