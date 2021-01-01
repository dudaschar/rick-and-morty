import React from 'react';

import { fireEvent, render, screen, waitFor } from 'src/testUtils/testUtils';

import List from './List';

describe('List container', () => {
  it('should display the query used on the search', () => {
    render(<List characters={{ results: [], info: {}}} query="Rick" />);

    expect(screen.queryByText('Rick')).toBeTruthy;
  });

  it('should display the clear filter button', () => {
    render(<List characters={{ results: [], info: {}}} query="Rick" />);

    expect(screen.queryByText('Clear filter')).toBeTruthy;
  });

  it('should display the pagination', () => {
    render(<List characters={{ results: [], info: {}}} query="Rick" />);

    expect(screen.queryByText('Page 1 of 1')).toBeTruthy;
  });

  it('should clear the query value when reset the filter', () => {
    render(<List characters={{ results: [], info: {}}} query="Rick" />);
    expect(screen.queryByText('Rick')).toBeTruthy();

    fireEvent.click(screen.getByText('Clear filter'));
    
    waitFor(() => {
      expect(screen.queryByText('Rick')).toBeFalsy();
      expect(screen.queryByText('All characters')).toBeTruthy();
    });
  });

  it('should render the list of characters found', () => {
    const characters = {
      "info": {
        "count": 2,
        "pages": 1,
        "next": null,
        "prev": null
      },
      "results": [
        {
          "id": 1,
          "name": "Rick Sanchez",
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
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
        },
        {
          "id": 2,
          "name": "Alien Rick",
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
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
        },
      ],
    };

    render(<List characters={characters} query="Rick" />);

    expect(screen.getByText('Rick Sanchez')).toBeTruthy();
    expect(screen.getByText('Alien Rick')).toBeTruthy();
  });

  it('should display an error message when none character is provided', () => {
    render(<List characters={{ results: [], info: {}}} query="Rick" />);

    expect(screen.queryByText('Not found :(')).toBeTruthy;
  });
});
