import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import UIfx from 'uifx';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import AudioPlayer from '../../components/AudioPlayer';
import GameResult from '../../components/GameResult';

import api from '../../services/api';

import { PlayerProps, CardProps, GameProps } from '../../@types/types';
import { Container, Deck, BoardWithDecks, Table, SelectedCard, Players } from './styles';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

interface Decks {
  juniorDeck?: CardProps[];
  bugDeck?: CardProps[];
}

function Game(): ReactElement {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [decks, setDecks] = useState<Decks>();
  const [loading, setLoading] = useState<boolean>(true);
  const [cardSelected, setCardSelected] = useState<CardProps | null>();
  const [cardsOnTable, setCardsOnTable] = useState<CardProps[]>([]);

  useEffect(() => {
    async function getGameStart() {
      setLoading(true);

      await api.get('game').then((response) => {
        setGame(response.data);
        setDecks({
          bugDeck: response.data.players[0].cards,
          juniorDeck: response.data.players[1].cards,
        });
      });
      setLoading(false);
    }
    getGameStart();
  }, [game.players]);

  const handleBugTurn = useCallback(() => {
    const { players } = game;

    const randomCard = players[0].cards[Math.floor(Math.random() * players[0].cards.length)];

    randomCard.isSelected = true;
    randomCard.type = 'BUG';

    const newbugDeck = game.players[0].cards.filter((card) => !card.isSelected);

    setDecks((previousCards) => ({
      bugDeck: newbugDeck,
      juniorDeck: previousCards?.juniorDeck,
    }));

    setCardSelected(randomCard);
    setCardsOnTable((previousCards) => [...previousCards, randomCard]);
    // api.post('move', {
    //   player: game.players[0],
    //   idGame: game.id,
    //   cardName: randomCard,
    // }).then(response => setGame(response.data));
  }, [game]);

  const handlePlayerSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = game.players[1].cards.find(
        (card) => card.name === event.currentTarget.id,
      );

      if (newSelectedCard) {
        newSelectedCard.type = 'JUNIOR';
      }

      setCardSelected(newSelectedCard);

      beep.play();
    },
    [game],
  );

  const sendCurrentSelectedCard = useCallback(
    (newCardSelected: CardProps) => {
      newCardSelected.isSelected = true;
      newCardSelected.type = 'JUNIOR';

      setCardsOnTable([...cardsOnTable, newCardSelected]);
      setCardSelected(null);

      const newjuniorDeck = decks?.juniorDeck?.filter((card) => !card.isSelected);

      setDecks((previousCards) => ({
        bugDeck: previousCards?.bugDeck,
        juniorDeck: newjuniorDeck,
      }));

      // api.post('move', {
      //   player: game.players[0],
      //   idGame: game.id,
      //   cardName: newCardSelected,
      // }).then(response => setGame(response.data));

      beep.play();

      setTimeout(() => {
        handleBugTurn();
      }, 5000);
    },
    [cardsOnTable, handleBugTurn, decks],
  );

  const handleSkipMove = useCallback(
    (playerId?: string) => {
      api.post('skipround', { player: playerId, idGame: game.id });
    },
    [game.id],
  );

  const finishCurrentRound = useCallback(() => {
    api.post('finishround', decks);
  }, [game]);

  return (
    <>
      {!loading && (
        <Container>
          {game.status !== 'playing' && <GameResult result={game.status} />}
          <Players>
            {game.players.map((player) => (
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
                handleSkipMove(game.players[1].id);
              }}
            >
              passar a vez
            </button>
          </Players>

          <BoardWithDecks>
            <Deck type="BUG">
              {decks?.bugDeck?.map((card) => (
                <Card
                  key={card.name}
                  description={card.description}
                  manaPoints={card.manaPoints}
                  name={card.name}
                  imgUrl={card.imgUrl}
                  type={game.players[0].type}
                  width={120}
                  height={150}
                />
              ))}
            </Deck>
            <Table>
              {cardsOnTable.map((card) => (
                <Card {...card} type={card.type} width={90} height={110} />
              ))}
            </Table>
            <Deck type={game.players[1].type}>
              {decks?.juniorDeck?.map((card) => (
                <Card
                  key={card.name}
                  description={card.description}
                  manaPoints={card.manaPoints}
                  name={card.name}
                  imgUrl={card.imgUrl}
                  type={game.players[1].type}
                  width={120}
                  height={150}
                  onClick={handlePlayerSelect}
                />
              ))}
            </Deck>
          </BoardWithDecks>

          {cardSelected && (
            <SelectedCard type={cardSelected.type}>
              <Card
                {...cardSelected}
                type={cardSelected.type}
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
      )}
    </>
  );
}

export default Game;
