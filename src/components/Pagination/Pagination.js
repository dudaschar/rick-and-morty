import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Button/Button';

import { PaginationContainer } from './styles/Wrapper';
import { Text } from './styles/Typography';

function Pagination({ charactersInfo, onPrev, onNext }) {
  const prevURL = charactersInfo?.prev && new URL(charactersInfo.prev);
  const prevPage = prevURL?.searchParams.get('page')
  const currentPage = !prevURL ? 1 : Number(prevPage) + 1;
  
  return (
    <PaginationContainer>
      <Button
        disabled={!charactersInfo?.prev}
        onClick={onPrev}
      >
        Previous
      </Button>
      <Text>
        Page {currentPage} of {charactersInfo?.pages ? charactersInfo.pages : '1'}
      </Text>
      <Button
        disabled={!charactersInfo?.next}
        onClick={onNext}
      >
        Next
      </Button>
    </PaginationContainer>
  )
}

Pagination.defaultProps = {
  charactersInfo: {},
};

Pagination.propTypes = {
  charactersInfo: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    pages: PropTypes.number,
    prev: PropTypes.string,
  }),
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default Pagination;
