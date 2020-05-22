import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import UIfx from 'uifx';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import AudioPlayer from '../../components/AudioPlayer';
import GameResult from '../../components/GameResult';

import api from '../../services/api';

import { PlayerProps, CardProps } from '../../@types/types';
import { Container, Deck, BoardWithDecks, Table, SelectedCard, Players } from './styles';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

function Game(): ReactElement {
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cardSelected, setCardSelected] = useState<CardProps>();
  const [cardsOnTable, setCardsOnTable] = useState<CardProps[]>([]);

  useEffect(() => {
    async function getGameStart() {
      setLoading(true);

      await api.get('game').then((response) => {
        setPlayers(response.data.players);
        setLoading(false);
      });
    }
    getGameStart();
  }, []);

  const handleBugTurn = useCallback(() => {
    const randomCard = players[0].cards[Math.floor(Math.random() * players[0].cards.length)];

    api.post('move', randomCard);
  }, [players]);

  const handlePlayerSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = players[1].cards.find((card) => card.name === event.currentTarget.id);

      setCardSelected(newSelectedCard);

      beep.play();
    },
    [players],
  );

  const sendCurrentSelectedCard = useCallback(
    (newCardSelected: CardProps) => {
      newCardSelected.isSelected = true;

      setCardsOnTable([...cardsOnTable, newCardSelected]);

      beep.play();
    },
    [cardsOnTable],
  );

  const handleSkipMove = useCallback((playerId?: string) => {
    api.post('skipround', playerId);
  }, []);

  const finishCurrentRound = useCallback(() => {
    const bugCards = players[0].cards.filter((card) => !card.isSelected);
    const playerCards = players[1].cards.filter((card) => !card.isSelected);

    console.log({ playerCards, bugCards });
    api.post('finishround', { playerCards, bugCards });
  }, [players]);

  return (
    <Container>
      <Players>
        {players.map((player) => (
          <PlayerStatus
            id={player.id}
            key={player.id}
            imgUrl={player.imgUrl}
            cards={player.cards}
            mana={player.mana}
            life={player.life}
            type={player.type}
          />
        ))}

        <button
          type="button"
          onClick={() => {
            handleSkipMove(players[1].id);
          }}
        >
          passar a vez
        </button>
      </Players>

      {!loading && (
        <BoardWithDecks>
          <Deck type="bug">
            {players[0].cards.map((card) => (
              <Card
                key={card.name}
                description={card.description}
                manaPoints={card.manaPoints}
                name={card.name}
                owner="bug"
                width={120}
                height={150}
              />
            ))}
          </Deck>
          <Table>
            {cardsOnTable.map((card) => (
              <Card {...card} owner="dev" width={90} height={110} />
            ))}
          </Table>
          <Deck type="dev">
            {players[1].cards.map((card) => (
              <Card
                key={card.name}
                description={card.description}
                manaPoints={card.manaPoints}
                name={card.name}
                owner="dev"
                width={120}
                height={150}
                onClick={handlePlayerSelect}
              />
            ))}
          </Deck>
        </BoardWithDecks>
      )}

      {cardSelected && (
        <SelectedCard>
          <Card
            {...cardSelected}
            owner="dev"
            width={130}
            height={170}
            onClick={handlePlayerSelect}
          />
          <span>{cardSelected.description}</span>
          <button type="button" onClick={() => sendCurrentSelectedCard(cardSelected)}>
            usar carta
          </button>
        </SelectedCard>
      )}
    </Container>
  );
}

export default Game;
