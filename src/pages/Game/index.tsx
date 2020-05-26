import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import UIfx from 'uifx';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import AudioPlayer from '../../components/AudioPlayer';
import GameResult from '../../components/GameResult';

import api from '../../services/api';
import {
  filterUnusedCards,
  updateMove,
  updateRound,
  updateSkipMove,
} from '../../utils/gameActions';

import { Decks, CardProps, GameProps } from '../../@types/types';
import { Container, Deck, BoardWithDecks, Table, SelectedCard, Players, Bubble } from './styles';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

function Game(): ReactElement {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [decks, setDecks] = useState<Decks>();
  const [loading, setLoading] = useState<boolean>(true);
  const [waitRound, setwaitRound] = useState<boolean>(false);
  const [waitingNewMovement, setWaitingNewMovement] = useState<boolean>(false);
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
  }, []);

  const handlefinishRound = useCallback(() => {
    const updatedGame = updateRound(decks);

    setwaitRound(false);
    setGame(updatedGame);

    setDecks({
      bugDeck: updatedGame.players[0].cards,
      juniorDeck: updatedGame.players[1].cards,
    });

    setCardsOnTable([]);
    setCardSelected(null);
  }, [decks]);

  const handleBugTurn = useCallback(() => {
    const randomCard = decks?.bugDeck?.[Math.floor(Math.random() * decks?.bugDeck?.length)];

    if (randomCard) {
      randomCard.isSelected = true;
      randomCard.type = 'BUG';

      const newbugDeck = filterUnusedCards(decks?.bugDeck);

      setDecks((previousCards) => ({
        bugDeck: newbugDeck,
        juniorDeck: previousCards?.juniorDeck,
      }));

      setCardSelected(randomCard);
      setCardsOnTable((previousCards) => [...previousCards, randomCard]);
      setwaitRound(true);

      setTimeout(() => {
        handlefinishRound();
      }, 6000);
    }
  }, [decks, handlefinishRound]);

  const handlePlayerSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = game.players[1].cards.find(
        (card) => card.name === event.currentTarget.id,
      );

      beep.play();

      if (newSelectedCard) {
        newSelectedCard.type = 'JUNIOR';
      }

      setCardSelected(newSelectedCard);
    },
    [game],
  );

  const sendCurrentSelectedCard = useCallback(
    (newCardSelected: CardProps) => {
      newCardSelected.isSelected = true;
      newCardSelected.type = 'JUNIOR';

      setCardsOnTable([...cardsOnTable, newCardSelected]);
      setCardSelected(null);

      const newjuniorDeck = filterUnusedCards(decks?.juniorDeck);

      setDecks((previousCards) => ({
        bugDeck: previousCards?.bugDeck,
        juniorDeck: newjuniorDeck,
      }));

      const updatedGame = updateMove(game?.players?.[1], game.id, newCardSelected.name);

      setGame(updatedGame);

      beep.play();

      setWaitingNewMovement(true);

      setTimeout(() => {
        handleBugTurn();
        setWaitingNewMovement(false);
      }, 5000);
    },
    [cardsOnTable, handleBugTurn, decks, game],
  );

  const handleSkipMove = useCallback(
    (playerId?: string) => {
      updateSkipMove(game.id, playerId);
      setTimeout(() => {
        handleBugTurn();
      }, 5000);
    },
    [game.id, handleBugTurn, game.move],
  );

  return (
    <>
      {!loading && (
        <Container>
          {waitingNewMovement && <Bubble moveNumber={game.move}>kkkkkkkkkkkk</Bubble>}

          {game.status === 'finished' && <GameResult winner={game.winner} />}
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
            <Deck type={game.players[0].type}>
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
              {waitRound && <span>Atualizando rodada...</span>}
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
