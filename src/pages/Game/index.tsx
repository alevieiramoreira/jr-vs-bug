import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import UIfx from 'uifx';

import Card from '../../components/Card';
import PlayerStatus from '../../components/PlayerStatus';
import GameResult from '../../components/GameResult';
import Loader from '../../components/Loader';

import { filterUnusedCards, getRandomCard } from '../../utils/gameActions';

import { getGameStart, sendData } from '../../services/game';
import { Decks, CardProps, GameProps, MovementData } from '../../@types/game';

import { Container, Deck, BoardWithDecks, Table, SelectedCard, Players, Bubble } from './styles';
import ErrorMsg from '../ErrorMsg';

const beepMp3 = require('../../assets/music/beep.mp3');

const beep = new UIfx(beepMp3);

function Game(): ReactElement {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const [decks, setDecks] = useState<Decks>({} as Decks);
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<boolean>(false);
  const [waitRound, setwaitRound] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState<CardProps | null>();
  const [cardsOnTable, setCardsOnTable] = useState<CardProps[]>([]);
  const [movement, setMovement] = useState<MovementData>();

  useEffect(() => {
    async function startGame() {
      await getGameStart()
        .then((response) => {
          setGame(response);

          setDecks({
            bugHand: response.players[0].hand,
            juniorHand: response.players[1].hand,
          });
        })
        .catch(() => setErrors(true));
      setLoading(false);
    }
    startGame();
  }, []);

  const handlefinishRound = useCallback(async () => {
    const updatedDecks = {
      juniorHand: filterUnusedCards(decks, 'JUNIOR'),
      bugHand: filterUnusedCards(decks, 'BUG'),
    };

    await sendData('finishround', {
      bugHand: updatedDecks.bugHand,
      juniorHand: updatedDecks.juniorHand,
    })
      .then((response) => {
        setwaitRound(false);

        setGame(response);

        setDecks({
          bugHand: response.players[0].hand,
          juniorHand: response.players[1].hand,
        });
      })
      .catch(() => setErrors(true));

    setCardsOnTable([]);
    setCardSelected(null);
  }, [decks]);

  const handleMove = useCallback(
    async (playerType: 'BUG' | 'JUNIOR', selectedCard?: CardProps) => {
      let newCardSelected = {} as CardProps;

      if (selectedCard) {
        newCardSelected = selectedCard;
      } else {
        newCardSelected = getRandomCard(decks.bugHand);
        newCardSelected.type = playerType;
      }

      newCardSelected.selected = true;

      setCardSelected(newCardSelected);
      setCardsOnTable((previousCards) => [...previousCards, newCardSelected]);

      await sendData('move', { playerType, name: newCardSelected.name })
        .then((response) => {
          setGame(response);
        })
        .catch(() => setErrors(true));

      setTimeout(() => {
        setwaitRound(true);
      }, 3000);

      if (playerType === 'BUG') {
        setTimeout(() => {
          handlefinishRound();
        }, 7000);
      }
    },
    [handlefinishRound, decks],
  );

  useEffect(() => {
    if (game.status === 'FINISHED') {
      return;
    }
    if (game.move % 2 === 0) {
      setMovement({ updateMovement: true, text: 'VEZ DO BUG' });

      setTimeout(() => {
        handleMove('BUG');
      }, 3000);
    } else {
      setMovement({ updateMovement: true, text: 'SUA VEZ DE JOGAR' });
    }
  }, [game.move, game.status, handleMove]);

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

  const handleSkipMove = useCallback(
    async (playerId?: number) => {
      beep.play();

      await sendData('skipround', { playerId, idGame: game.id })
        .then((response) => {
          setGame(response);
        })
        .catch(() => setErrors(true));

      setTimeout(() => {
        handleMove('BUG');
      }, 5000);
    },
    [game.id, handleMove],
  );

  return (
    <>
      {errors && <ErrorMsg />}
      {loading && <Loader />}
      {!loading && !errors && (
        <Container>
          {movement?.updateMovement && <Bubble moveNumber={game.move}>{movement.text}</Bubble>}

          {game.status === 'FINISHED' && <GameResult winner={game.winner} />}

          <Players>
            {game &&
              game.players.map((player) => (
                <PlayerStatus
                  id={player.id}
                  key={player.id}
                  imageUrl={player.imageUrl}
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
              {decks.bugHand.map((card: CardProps) => (
                <Card
                  key={card.name}
                  description={card.description}
                  manaPoints={card.manaPoints}
                  damage={card.damage}
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
                <Card {...card} width={90} height={110} />
              ))}
              {waitRound && <span>Atualizando rodada! Embaralhando cartas...</span>}
            </Table>
            <Deck type={game.players[1].type}>
              {decks.juniorHand.map((card: CardProps) => (
                <Card
                  key={card.name}
                  description={card.description}
                  manaPoints={card.manaPoints}
                  name={card.name}
                  damage={card.damage}
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
            <SelectedCard>
              <span>{cardSelected.name}</span>
              <Card {...cardSelected} width={130} height={170} onClick={handlePlayerSelect} />
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
                  <button type="button" onClick={() => handleMove(cardSelected.type, cardSelected)}>
                    usar carta
                  </button>
                </p>
              )}
            </SelectedCard>
          )}
        </Container>
      )}
    </>
  );
}

export default Game;
