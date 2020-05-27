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
          bugHand: response.data.players[0].hand,
          juniorHand: response.data.players[1].hand,
        });
      });

      setLoading(false);
    }
    getGameStart();
  }, []);

  const handlefinishRound = useCallback(async () => {
    await updateRound(decks).then((response) => {
      setwaitRound(false);
      console.log(response);
      setGame(response);

      setDecks({
        bugHand: response.players[0].hand,
        juniorHand: response.players[1].hand,
      });
    });

    setCardsOnTable([]);
    setCardSelected(null);
    setMovement({ updateMovement: true, text: 'SUA VEZ DE JOGAR!' });
  }, [decks]);

  const handleBugTurn = useCallback(() => {
    const randomCard = getRandomCard(decks?.bugHand);

    if (randomCard) {
      randomCard.isSelected = true;
      randomCard.type = 'BUG';

      const newbugHand = filterUnusedCards(decks?.bugHand);

      setDecks((previousCards) => ({
        bugHand: newbugHand,
        juniorHand: previousCards?.juniorHand,
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
    async (newCardSelected: CardProps) => {
      newCardSelected.isSelected = true;
      newCardSelected.type = 'JUNIOR';

      setMovement({ updateMovement: true, text: 'VEZ DO BUG!' });
      setCardsOnTable([...cardsOnTable, newCardSelected]);
      setCardSelected(null);

      const newjuniorHand = filterUnusedCards(decks?.juniorHand);

      setDecks((previousCards) => ({
        bugHand: previousCards?.bugHand,
        juniorHand: newjuniorHand,
      }));

      await updateMove(game?.players?.[1], newCardSelected.name).then((response) => {
        setGame(response);
      });

      beep.play();

      setTimeout(() => {
        handleBugTurn();
      }, 5000);
    },
    [cardsOnTable, handleBugTurn, decks, game],
  );

  const handleSkipMove = useCallback(
    async (playerId?: number) => {
      beep.play();

      setMovement({ updateMovement: true, text: 'VOCÊ PASSOU' });

      await updateSkipMove(game.id, playerId).then((response) => {
        setGame(response);

        setMovement({ updateMovement: true, text: 'VEZ DO BUG' });
      });

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
              {decks?.bugHand?.map((card) => (
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
              {decks?.juniorHand?.map((card) => (
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
