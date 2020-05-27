import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import UIfx from 'uifx';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import AudioPlayer from '../../components/AudioPlayer';
import GameResult from '../../components/GameResult';

import api from '../../services/api';
import { filterUnusedCards, getRandomCard } from '../../utils/gameActions';

import { updateMove, updateRound, updateSkipMove } from '../../services/game';

import { Decks, CardProps, GameProps, MovementData } from '../../@types/game';
import { Container, Deck, BoardWithDecks, Table, SelectedCard, Players, Bubble } from './styles';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

function Game(): ReactElement {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [decks, setDecks] = useState<Decks>();
  const [loading, setLoading] = useState<boolean>(true);
  const [waitRound, setwaitRound] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState<CardProps | null>();
  const [cardsOnTable, setCardsOnTable] = useState<CardProps[]>([]);
  const [movement, setMovement] = useState<MovementData>({
    updateMovement: true,
    text: 'SUA VEZ DE JOGAR!',
  });

  useEffect(() => {
    async function getGameStart() {
      setLoading(true);

      await api.get('game').then((response) => {
        setGame(response.data);
        console.log(response.data);

        setDecks({
          bugDeck: response.data.players[0].hand,
          juniorDeck: response.data.players[1].hand,
        });
      });

      setLoading(false);
    }
    getGameStart();
  }, []);

  const handlefinishRound = useCallback(() => {
    const updatedGame = updateRound(decks);
    // .then((response) => {
    //   // setGame(response.data)
    // });

    setwaitRound(false);
    setGame(updatedGame);

    setDecks({
      bugDeck: updatedGame.players[0].hand,
      juniorDeck: updatedGame.players[1].hand,
    });

    setCardsOnTable([]);
    setCardSelected(null);
    setMovement({ updateMovement: true, text: 'SUA VEZ DE JOGAR!' });
  }, [decks]);

  const handleBugTurn = useCallback(() => {
    const randomCard = getRandomCard(decks?.bugDeck);

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

      setMovement({ updateMovement: false, text: '' });

      setTimeout(() => {
        setwaitRound(true);
      }, 3000);

      setTimeout(() => {
        handlefinishRound();
      }, 7000);
    }
  }, [decks, handlefinishRound]);

  const handlePlayerSelect = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = game.players[1].hand.find(
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

      setMovement({ updateMovement: true, text: 'VEZ DO BUG!' });
      setCardsOnTable([...cardsOnTable, newCardSelected]);
      setCardSelected(null);

      const newjuniorDeck = filterUnusedCards(decks?.juniorDeck);

      setDecks((previousCards) => ({
        bugDeck: previousCards?.bugDeck,
        juniorDeck: newjuniorDeck,
      }));

      const updatedGame = updateMove(game?.players?.[1], game.id, newCardSelected.name);
      // .then((response) => {
      //   // setGame(response.data)
      // });
      setGame(updatedGame);

      beep.play();

      setTimeout(() => {
        handleBugTurn();
      }, 5000);
    },
    [cardsOnTable, handleBugTurn, decks, game],
  );

  const handleSkipMove = useCallback(
    (playerId?: number) => {
      beep.play();

      setMovement({ updateMovement: true, text: 'VOCÊ PASSOU' });

      updateSkipMove(game.id, playerId).then((response) => {
        // setGame(response.data)
      });

      // dizer q é a vez do bug depois da response

      setTimeout(() => {
        handleBugTurn();
        setMovement({ updateMovement: false, text: '' });
      }, 5000);
    },
    [game.id, handleBugTurn],
  );

  return (
    <>
      {!loading && (
        <Container>
          {movement.updateMovement && <Bubble moveNumber={game.move}>{movement.text}</Bubble>}

          {game.status === 'finished' && <GameResult winner={game.winner} />}

          <Players>
            {game.players.map((player) => (
              <PlayerStatus
                id={player.id}
                key={player.id}
                imgUrl={player.imgUrl}
                hand={player.hand}
                mana={player.mana}
                life={player.life}
                type={player.type}
                data-testid={`player-${player.type}`}
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
              {waitRound && <span>Atualizando rodada! Embaralhando cartas...</span>}
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
              <span>{cardSelected.name}</span>
              <Card
                {...cardSelected}
                type={cardSelected.type}
                width={130}
                height={170}
                onClick={handlePlayerSelect}
              />
              <span>{cardSelected.description}</span>
              {cardSelected.type === 'JUNIOR' && (
                <p>
                  <em>
                    custo/ganho de mana:
                    <strong>{cardSelected.manaPoints}</strong>
                  </em>

                  <em>
                    dano no bug:
                    <strong>{cardSelected.damage}</strong>
                  </em>
                </p>
              )}

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
