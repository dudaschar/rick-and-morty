import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/containers/List/List';

function ListPage({ data, query }) {
  return (
    <List characters={data.results} query={query} />
  );
}

export async function getServerSideProps({query}) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${query.character}`)
    .then(res => res.json())
    .then(data => data)
  
  return { props: { data, query: query.character } }
}

ListPage.defaultProps = {
  query: '',
}

ListPage.propTypes = {
  data: PropTypes.shape({
    info: PropTypes.shape({
      count: PropTypes.number,
      pages: PropTypes.number,
      next: PropTypes.string,
      prev: PropTypes.string
    }).isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  query: PropTypes.string,
}

export default ListPage;
