import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.huge};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`

PageWrapper.displayName = 'PageWrapper';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

ListWrapper.displayName = 'ListWrapper';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

SearchWrapper.displayName = 'SearchWrapper';
