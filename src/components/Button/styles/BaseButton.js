import styled from 'styled-components';

export const BaseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  cursor: pointer;
  flex-basis: auto;
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
  }
`;

BaseButton.displayName = 'BaseButton';