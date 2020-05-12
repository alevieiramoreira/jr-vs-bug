import React, { ReactElement, useEffect, useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import UIfx from 'uifx';

import { Container, Deck, Board, Table, SelectedCard, Players } from './styles';

import { CardState, State } from '../../redux/types';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import AudioPlayer from '../../components/AudioPlayer';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

interface StateProps {
  game: State;
}

function Game(): ReactElement {
  const [cardSelected, setCardSelected] = useState<CardState>();
  const [cardsOnTable, setCardsOnTable] = useState<CardState[]>([]);
  const players = useSelector((state: StateProps) => state.game.players);

  const decks = players.map((player) => player.deck);

  const dispatch: Dispatch = useDispatch();

  const handleCardSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      beep.play();
      const newSelectedCard = decks[1].find((card) => card.id === event.currentTarget.id);

      setCardSelected(newSelectedCard);
    },
    [decks],
  );

  const handleCurrentSelectedCard = useCallback(
    (newCardSelected: CardState) => {
      beep.play();
      dispatch({ type: newCardSelected.id, id: newCardSelected.playerId });

      setCardsOnTable([...cardsOnTable, newCardSelected]);
    },
    [dispatch, cardsOnTable],
  );

  return (
    <Container>
      <Players>
        <AudioPlayer />

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
          {cardsOnTable.map((card) => (
            <Card {...card} owner="dev" width={90} height={110} />
          ))}
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
          <Card {...cardSelected} owner="dev" width={130} height={170} onClick={handleCardSelect} />
          <span>{cardSelected.description}</span>
          <button type="button" onClick={() => handleCurrentSelectedCard(cardSelected)}>
            usar carta
          </button>
        </SelectedCard>
      )}
    </Container>
  );
}

export default Game;
