import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'src/components/CharacterCard/CharacterCard';
import Button from 'src/components/Button/Button';

import { PageWrapper, ListWrapper, SearchWrapper } from './styles/Wrapper';
import { Title, FilterOptions } from './styles/Typography';

function List({ characters, query }) {
  const [charactersResult, setCharactersResult] = useState(characters);
  const [searchQuery, setSearchQuery] = useState(query);

  const handleClearFilter = async () => {
    await fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(data => setCharactersResult(data.results))

    setSearchQuery('All characters');
  }

  return (
    <PageWrapper>
      <Title>List of characters</Title>
      <SearchWrapper>
        <FilterOptions>
          <strong>Searching for:</strong> {searchQuery}
        </FilterOptions>
        <Button
          onClick={handleClearFilter}
        >
          Clear filter
        </Button>
      </SearchWrapper>
      <ListWrapper>
        {charactersResult.map(character => (
          <CharacterCard
            key={character.id}
            info={character}
          />
        ))}
      </ListWrapper>
    </PageWrapper>
  );
}

List.propTypes = {
  characters: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
}

export default List;
