import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.medium}};
  text-align: center;
`;

Title.displayName = 'Title';
