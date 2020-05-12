import React, { ReactElement, useEffect, useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Deck, Board, Table, SelectedCard, Players } from './styles';

import { PlayerState, CardState, State } from '../../redux/types';

import Card, { CardProps } from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';

interface StateProps {
  game: State;
}

function Game(): ReactElement {
  const [cardSelected, setCardSelected] = useState<CardState>();
  const players = useSelector((state: StateProps) => state.game.players);

  const decks = players.map((player) => player.deck);

  const dispatch: Dispatch = useDispatch();

  const handleCardSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = decks[1].find(
        (card) => card.id === event.currentTarget.id,
      );

      setCardSelected(newSelectedCard);
    },
    [decks],
  );

  const handleCurrentSelectedCard = useCallback(
    (type: string, playerId: string) => {
      dispatch({ type, id: playerId });
    },
    [dispatch],
  );

  return (
    <Container>
      <Players>
        {players.map((player) => (
          <PlayerStatus
            id={player.id}
            key={player.id}
            imgUrl={player.imgUrl}
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
              playerId={card.playerId}
              key={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              owner="bug"
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
              playerId={card.playerId}
              key={card.id}
              description={card.description}
              manaUsagePoints={card.manaUsagePoints}
              name={card.name}
              owner="dev"
              width={120}
              height={130}
              onClick={handleCardSelect}
            />
          ))}
        </Deck>
      </Board>

      {cardSelected && (
        <SelectedCard>
          <Card
            id={cardSelected.id}
            playerId={cardSelected.id}
            key={cardSelected.id}
            description={cardSelected.description}
            manaUsagePoints={cardSelected.manaUsagePoints}
            name={cardSelected.name}
            owner="dev"
            width={130}
            height={170}
            onClick={handleCardSelect}
          />
          <span>{cardSelected.description}</span>
          <button
            type="button"
            onClick={() =>
              handleCurrentSelectedCard(cardSelected.id, cardSelected.playerId)
            }
          >
            usar carta
          </button>
        </SelectedCard>
      )}
    </Container>
  );
}

export default Game;
