import React from 'react';
import Head from 'next/head'

import HomePage from 'src/containers/Home/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty | Search</title>
      </Head>
      <HomePage />
    </>
  )
}
