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
  const [decks, setDecks] = useState<Decks>({} as Decks);
  const [loading, setLoading] = useState<boolean>(true);
  const [waitRound, setwaitRound] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState<CardProps | null>();
  const [cardsOnTable, setCardsOnTable] = useState<CardProps[]>([]);
  const [movement, setMovement] = useState<MovementData>();

  useEffect(() => {
    async function getGameStart() {
      setLoading(true);

      await api.get('game').then((response) => {
        setGame(response.data);

        setDecks({
          bugHand: response.data.players[0].hand,
          juniorHand: response.data.players[1].hand,
        });
      });

      setLoading(false);
    }
    getGameStart();
  }, []);

  const handlefinishRound = useCallback(async () => {
    console.log('decks', decks);
    const updatedDecks = {
      juniorHand: filterUnusedCards(decks, 'JUNIOR'),
      bugHand: filterUnusedCards(decks, 'BUG'),
    };
    // rever a property isSelected com o back
    console.log('decks atualizados', updatedDecks);

    await updateRound(updatedDecks).then((response) => {
      setwaitRound(false);

      setGame(response); // response ta bugado quando tem winner
      console.log('response do finish round', response);

      setDecks({
        bugHand: response.players[0].hand,
        juniorHand: response.players[1].hand,
      });
    });

    setCardsOnTable([]);
    setCardSelected(null);
  }, [decks]);

  const handleMove = useCallback(
    async (playerType: 'BUG' | 'JUNIOR', selectedCard?: CardProps) => {
      let newCardSelected = {} as CardProps;

      newCardSelected.isSelected = true;
      newCardSelected.type = playerType;

      if (selectedCard) {
        newCardSelected = selectedCard;
      } else {
        newCardSelected = getRandomCard(decks.bugHand);
      }

      setCardSelected(newCardSelected);
      setCardsOnTable((previousCards) => [...previousCards, newCardSelected]);

      await updateMove(playerType, newCardSelected.name).then((response) => {
        setGame(response); // sobrescreve as properties das minhas cartas
      });

      setTimeout(() => {
        setwaitRound(true);
      }, 3000);

      setTimeout(() => {
        handlefinishRound();
      }, 7000);
    },
    [handlefinishRound, decks],
  );

  useEffect(() => {
    if (game.move % 2 === 0) {
      setMovement({ updateMovement: true, text: 'VEZ DO BUG' });

      setTimeout(() => {
        handleMove('BUG');
      }, 3000);
    } else {
      setMovement({ updateMovement: true, text: 'SUA VEZ DE JOGAR' });
    }
  }, [game.move, handleMove]);

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

      await updateSkipMove(game.id, playerId).then((response) => {
        setGame(response);
      });

      setTimeout(() => {
        handleMove('BUG');
      }, 5000);
    },
    [game.id, handleMove],
  );

  return (
    <>
      {!loading && (
        <Container>
          {movement?.updateMovement && <Bubble moveNumber={game.move}>{movement.text}</Bubble>}

          {game.status === 'FINISHED' && <GameResult winner={game.winner} />}

          <Players>
            {game.players.map((player) => (
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
                <Card {...card} type={card.type} width={90} height={110} />
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

              <button type="button" onClick={() => handleMove(cardSelected.type, cardSelected)}>
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
