import React, { ReactElement, useEffect, useRef } from 'react';

import heartImg from '../../assets/heart.png';
import manaImg from '../../assets/mana.png';

import { PlayerStatusContainer, StatusBar } from './styles';
import { PlayerProps } from '../../@types/types';
import { usePreviousValue } from '../../hooks/values';

function PlayerStatus({ imgUrl, life, mana, type }: PlayerProps): ReactElement {
  const lifeBar = useRef<HTMLDivElement>(null);
  const manaBar = useRef<HTMLDivElement>(null);
  const previousLife = usePreviousValue<number>(life);
  const previousMana = usePreviousValue<number>(mana);

  useEffect(() => {
    if (!!previousLife && previousLife > life) {
      if (lifeBar.current) {
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
    } // isso aqui funciona, consigo pegar a subtração da vida e mana.

    if (!!previousMana && previousMana !== mana) {
      if (manaBar.current) {
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
}

export default PlayerStatus;
