import styled from 'styled-components';

export const BaseInput = styled.input`
  width: 100%;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.small}`};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin: ${({ theme }) => `${theme.spacing.small} 0`}
`;

BaseInput.displayName = 'BaseInput';