import React, { ReactElement, useEffect, useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Deck, Board, Table, SelectedCard, Players } from './styles';

import { PlayerState, CardState } from '../../redux/types';
import api from '../../services/api';

import Card, { CardProps } from '../../components/Deck/Card';
import PlayerStatus from '../../components/PlayerStatus';

interface StateProps {
  game: PlayerState[];
}

function Game(): ReactElement {
  const players = useSelector((state: StateProps) => state.game);

  const decks = useSelector((state: StateProps) =>
    state.game.map((player) => player.deck),
  );

  const dispatch: Dispatch = useDispatch();

  const handleCardSelect = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('EVENTO DISPARADO');
      // dispatch({ type: event.currentTarget.id });
    },
    [],
  );
  console.log(decks);

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
              key={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              owner="bug"
              width={120}
              height={130}
              onClick={() => {
                console.log('evento card bug');
              }}
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
              key={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              owner="dev"
              width={120}
              height={130}
              onClick={() => {
                console.log('evento card dev');
              }}
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
