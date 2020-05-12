import React, { ReactElement } from 'react';

import heartImg from '../../assets/heart.png';
import manaImg from '../../assets/mana.png';

import { PlayerStatusContainer, StatusBar } from './styles';
import { PlayerState } from '../../redux/types';

function PlayerStatus({ imgUrl, health, mana }: PlayerState): ReactElement {
  return (
    <PlayerStatusContainer>
      <img src={imgUrl} alt="avatar do bug" />
      <StatusBar type="health" health={health}>
        <div>
          <img src={heartImg} alt="coração em pixel art" />
        </div>
      </StatusBar>

      <StatusBar type="mana" mana={mana}>
        <div>
          <img src={manaImg} alt="pote de mana em pixel art" />
        </div>
      </StatusBar>
    </PlayerStatusContainer>
  );
}

export default PlayerStatus;
