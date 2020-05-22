import React, { ReactElement } from 'react';

import heartImg from '../../assets/heart.png';
import manaImg from '../../assets/mana.png';

import { PlayerStatusContainer, StatusBar } from './styles';
import { PlayerProps } from '../../@types/types';

function PlayerStatus({ imgUrl, life, mana, type }: PlayerProps): ReactElement {
  return (
    <PlayerStatusContainer>
      <img src={imgUrl} alt={`avatar do ${type}`} />
      <StatusBar type="life" life={life}>
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
