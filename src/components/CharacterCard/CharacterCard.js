import React from 'react';
import PropTypes from 'prop-types';

import { Card, Content } from './styles/Wrapper';
import { Image } from './styles/Image';
import { CardTitle } from './styles/Typography';

function CharacterCard({ info }) {
  return (
    <Card href={`/list/details?character=${info.id}`}>
      <Image src={info.image} />
      <Content>
        <CardTitle>{info.name}</CardTitle>
        <p><strong>Episodes:</strong> {info.episode.length}</p>
        <p><strong>Last location:</strong> {info.location.name}</p>
      </Content>
    </Card>
  );
}

CharacterCard.propTypes = {
  info: PropTypes.object.isRequired,
}

export default CharacterCard;
