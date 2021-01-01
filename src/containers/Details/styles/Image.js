import styled from 'styled-components';

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

Image.displayName = 'Image';
