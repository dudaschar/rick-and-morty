import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper, SearchWrapper } from './styles/Wrapper';
import { Title } from './styles/Typography';
import { SearchIcon } from 'src/icons/Search';
import { StyledInput } from './styles/Input';
import { StyledButton } from './styles/Button';

function Home({ theme }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const handleInputValue = ({ target }) => {
    const { value } = target;

    setSearchValue(value);
  }

  useEffect(() => {
    if (searchValue) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [searchValue])

  return (
    <Wrapper>
      <Title>Search for a Rick and Morty&apos;s character</Title>
      <SearchWrapper>
        <StyledInput
          placeholder="type here..."
          value={searchValue}
          onChange={handleInputValue}
        />
        <StyledButton
          disabled={isButtonDisabled}
        >
          <SearchIcon
            color={theme.colors.primaryLight}
          />
        </StyledButton>
      </SearchWrapper>
    </Wrapper>
  );
}

Home.propTypes = {
  theme: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default withTheme(Home);
