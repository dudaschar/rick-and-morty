import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CharacterCard from 'src/components/CharacterCard/CharacterCard';
import Button from 'src/components/Button/Button';
import Pagination from 'src/components/Pagination/Pagination';

import { PageWrapper, ListWrapper, SearchWrapper } from './styles/Wrapper';
import { Title, FilterOptions } from './styles/Typography';

function List({ characters, query }) {
  const [charactersResult, setCharactersResult] = useState(characters.results);
  const [searchQuery, setSearchQuery] = useState(query);
  const [charactersInfo, setcharactersInfo] = useState(characters.info);

  const handleNewResults = async (url) => {
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      setCharactersResult(data.results);
      setcharactersInfo(data.info);
    })
  }
  
  const handleClearFilter = async () => {
    await handleNewResults('https://rickandmortyapi.com/api/character');

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
      <Pagination
        charactersInfo={charactersInfo}
        onPrev={() => handleNewResults(charactersInfo.prev)}
        onNext={() => handleNewResults(charactersInfo.next)}
      />
    </PageWrapper>
  );
}

List.propTypes = {
  characters: PropTypes.shape({
    results: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired,
  }).isRequired,
  query: PropTypes.string.isRequired,
}

export default List;
