import React, { ReactElement } from 'react';

import heartImg from '../../assets/heart.png';
import manaImg from '../../assets/mana.png';

import { Container, StatusBar } from './styles';
import { PlayerState } from '../../redux/types';

function PlayerStatus({
  imgUrl,
  deck,
  health,
  mana,
  playerName,
}: PlayerState): ReactElement {
  return (
    <Container>
      <img src={imgUrl} alt="avatar do bug" />
      <StatusBar type="health">
        <img src={heartImg} alt="coração em pixel art" />
      </StatusBar>
      <StatusBar type="mana">
        <img src={manaImg} alt="pote de mana em pixel art" />
      </StatusBar>
    </Container>
  );
}

export default PlayerStatus;
