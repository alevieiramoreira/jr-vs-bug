import React, { ReactElement } from 'react';

import {
  Container,
  Deck,
  Status,
  Board,
  Table,
  SelectedCard,
  StatusBar,
} from './styles';

import bugImg from '../../assets/bug.png';
import playerImg from '../../assets/player.png';
import heartImg from '../../assets/heart.png';
import manaImg from '../../assets/mana.png';

import Card from '../../components/Card';

function Game(): ReactElement {
  return (
    <Container>
      <Status>
        <div>
          <img src={bugImg} alt="avatar do bug" />
          <StatusBar type="health">
            <img src={heartImg} alt="coração em pixel art" />
          </StatusBar>
          <StatusBar type="mana">
            <img src={manaImg} alt="pote de mana em pixel art" />
          </StatusBar>
        </div>
        <div>
          <img src={playerImg} alt="avatar do player" />
          <StatusBar type="health">
            <img src={heartImg} alt="coração em pixel art" />
          </StatusBar>
          <StatusBar type="mana">
            <img src={manaImg} alt="pote de mana em pixel art" />
          </StatusBar>
        </div>
      </Status>

      <Board>
        <Deck type="bug">
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
          <Card type="bug" width={120} height={130} />
        </Deck>

        <Table>
          <Card type="player" width={90} height={120} />
          <Card type="bug" width={90} height={120} />
        </Table>

        <Deck type="player">
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
          <Card type="player" width={120} height={140} />
        </Deck>
      </Board>

      <SelectedCard>
        <Card type="player" width={120} height={180} />
        <span>descricao da carta</span>
      </SelectedCard>
    </Container>
  );
}

export default Game;
