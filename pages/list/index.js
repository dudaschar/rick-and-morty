import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import List from 'src/containers/List/List';

function ListPage({ data, query }) {
  return (
    <>
      <Head>
        <title>Searching for &quot;{query}&quot; | Rick and Morty</title>
      </Head>
      <List characters={data} query={query} />
    </>
  );
}

export async function getServerSideProps({query}) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${query.character}`)
    .then(res => {
      if (!res.ok) {
        return res.statusText
      }

      return res.json()
    })
    .then(data => data)
  
  return { props: { data, query: query.character } }
}

ListPage.defaultProps = {
  query: '',
}

ListPage.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      info: PropTypes.shape({
        count: PropTypes.number,
        pages: PropTypes.number,
        next: PropTypes.string,
        prev: PropTypes.string
      }).isRequired,
      results: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
    PropTypes.string,
  ]),
  query: PropTypes.string,
}

export default ListPage;
