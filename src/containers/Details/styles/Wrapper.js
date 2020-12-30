import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
`;

Wrapper.displayName = 'Wrapper';

export const CharacterDetails = styled.div`
  padding-top: ${({ theme }) => theme.spacing.huge};

  @media (min-width: 768px) {
    padding-right: ${({ theme }) => theme.spacing.huge};
  }
`;

CharacterDetails.displayName = 'CharacterDetails';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column-reverse; 
  padding: ${({ theme }) => theme.spacing.huge};
  border-radius: 1rem;
  max-width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

Card.displayName = 'Card';

export const ImageDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

ImageDetail.displayName = 'ImageDetail';
