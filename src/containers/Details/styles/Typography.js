import styled from 'styled-components';

export const CharacterName = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
`;

CharacterName.displayName = 'CharacterName';

export const EpisodesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.medium};
`;

EpisodesTitle.displayName = 'EpisodesTitle';

