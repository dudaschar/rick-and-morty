import React from 'react';
import { render } from 'src/testUtils/testUtils';

import CharacterCard from './CharacterCard';

describe('CharacterCard Component', () => {
  it('should render the component properly', () => {
    const props = {
      id: 1,
      image: 'Rick_image_path.jpg',
      name: 'Rick',
      episode: [
        'episode 1',
      ],
      location: {
        name: 'Earth',
      }
    }

    const { asFragment } = render(
      <CharacterCard
        info={props}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});