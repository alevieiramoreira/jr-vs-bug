import React, { ReactElement, useEffect, useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Deck, Board, Table, SelectedCard, Players } from './styles';

import { PlayerState } from '../../redux/types';
import api from '../../services/api';

import Card from '../../components/Deck/Card';
import PlayerStatus from '../../components/PlayerStatus';

interface StateProps {
  game: PlayerState[];
}

function Game(): ReactElement {
  const players = useSelector((state: StateProps) => state.game);

  const decks = useSelector((state: StateProps) =>
    state.game.map((player) => player.deck),
  );
  console.log(decks);

  const dispatch: Dispatch = useDispatch();

  return (
    <Container>
      <Players>
        {players.map((player) => (
          <PlayerStatus
            imgUrl={player.imgUrl}
            key={player.playerName}
            deck={player.deck}
            mana={player.mana}
            health={player.health}
            playerName={player.playerName}
          />
        ))}
      </Players>
      <Board>
        <Deck type="bug">
          {decks[0].map((card) => (
            <Card
              id={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              type="bug"
              width={120}
              height={130}
            />
          ))}
        </Deck>
        <Table>
          {/* <Card type="dev" width={90} height={120} />
          <Card type="bug" width={90} height={120} /> */}
        </Table>
        <Deck type="dev">
          {decks[1].map((card) => (
            <Card
              id={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              type="dev"
              width={120}
              height={130}
            />
          ))}
        </Deck>
      </Board>

      <SelectedCard>
        {/* <Card type="dev" width={120} height={180} /> */}
        <span>descricao da carta</span>
      </SelectedCard>
    </Container>
  );
}

export default Game;
