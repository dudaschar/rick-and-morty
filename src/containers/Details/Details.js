import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Button/Button';

import { Wrapper, CharacterDetails, Card, ImageDetail } from './styles/Wrapper';
import { CharacterName, EpisodesTitle } from './styles/Typography';
import { List, ListItem } from './styles/List';
import { Image } from './styles/Image';

function Details({ data }) {
  return (
    <Wrapper>
      <Card>
        <CharacterDetails>
          <CharacterName>{data.name}</CharacterName>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Species:</strong> {data.species}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Type:</strong> {data.type !== '' ? data.type : 'N/A'}</p>
          <p><strong>Origin:</strong> {data.origin.name}</p>
          <p><strong>Location:</strong> {data.location.name}</p>
          <EpisodesTitle>Episodes</EpisodesTitle>
          {data.episode.map(ep => (
            <List key={ep.name}>
              <ListItem>
                <p><strong>Name:</strong> {ep.name}</p>
                <p><strong>Air Date:  </strong> {ep.air_date}</p>
              </ListItem>
            </List>
          ))}
        </CharacterDetails>
        <ImageDetail>
          <Image src={data.image} alt={data.name}/>
          <Button onClick={() => alert('Available soon')}>Buy merchandise</Button>
        </ImageDetail>
      </Card>
    </Wrapper>
  )
}

Details.propTypes = {
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

export default Details;
