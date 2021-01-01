import React from 'react';
import { render, screen } from 'src/testUtils/testUtils';

import Details from './Details';

const DATA = {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    {
      name: 'Episode 1',
      air_date: '13 jun'
    }
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}

describe('Details Container', () => {
  it('should render the all the character details', () => {
    const { asFragment } = render(
      <Details data={DATA} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a buy merchandise button', () => {
    render(<Details data={DATA} />);

    expect(screen.queryByText('Buy merchandise')).toBeTruthy();
  })
});
