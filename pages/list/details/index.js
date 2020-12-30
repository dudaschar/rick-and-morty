import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Details from 'src/containers/Details/Details';

function DetailsPage({ data }) {
  return (
    <>
      <Head>
        <title>{data.name} | Rick and Morty</title>
      </Head>
      <Details data={data} />
    </>
  );
}

export async function getServerSideProps({query}) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${query.character}`)
    .then(res => res.json())
    .then(async data => {
      const episode = await Promise.all(data.episode.map(async ep => (
        await fetch(ep)
          .then(res => res.json())
          .then(data => ({name: data.name, air_date: data.air_date})))))
      
      return {...data, episode};
    })
  
  return { props: { data } }
}

DetailsPage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    image: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      air_date: PropTypes.string,
    })),
    url: PropTypes.string,
    created: PropTypes.string,
  }),
}

export default DetailsPage;
