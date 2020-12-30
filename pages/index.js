import React from 'react';
import Head from 'next/head';

import Home from 'src/containers/Home/Home';

function HomePage() {
  return(
    <>
      <Head>
        <title>Search | Rick and Morty</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage;
