import React, { useEffect, useRef } from 'react';

import heartImg from '../../assets/images/heart.png';
import manaImg from '../../assets/images/mana.png';

import { PlayerStatusContainer, StatusBar } from './styles';
import { PlayerProps } from '../../@types/game';
import { usePreviousValue } from '../../hooks/values';

const PlayerStatus: React.FC<PlayerProps> = ({ imgUrl, life, mana, type }) => {
  const lifeBar = useRef<HTMLDivElement>(null);
  const manaBar = useRef<HTMLDivElement>(null);
  const previousLife = usePreviousValue<number>(life);
  const previousMana = usePreviousValue<number>(mana);

  useEffect(() => {
    if (lifeBar.current) {
      if (!!previousLife && previousLife > life) {
        lifeBar.current.animate(
          [
            // keyframes
            { background: '#fff' },
            { background: '#ff0000' },
          ],
          {
            duration: 300,
            delay: 0.1,
            iterations: 3,
          },
        );
      }
    }

    if (manaBar.current) {
      if (!!previousMana && previousMana > mana) {
        manaBar.current.animate(
          [
            // keyframes
            { background: '#fff' },
            { background: '#000a71' },
          ],
          {
            duration: 300,
            delay: 0.1,
            iterations: 1,
          },
        );
      }
    }
  }, [life, mana]);

  return (
    <PlayerStatusContainer>
      <img src={imgUrl} alt={`avatar do ${type}`} />

      <StatusBar ref={lifeBar} barType="life" life={life}>
        <span>
          <img src={heartImg} alt="coração em pixel art" />
        </span>
      </StatusBar>

      <StatusBar ref={manaBar} barType="mana" mana={mana}>
        <span>
          <img src={manaImg} alt="pote de mana em pixel art" />
        </span>
      </StatusBar>
    </PlayerStatusContainer>
  );
};

export default PlayerStatus;
