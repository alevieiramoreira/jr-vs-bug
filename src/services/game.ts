import { GameProps, Decks } from '../@types/game';
import api from './api';

export const getGameStart = (): Promise<GameProps> => {
  const token = localStorage.getItem('@JrVsBug:token');

  try {
    const response = api.get('game', { headers: { token } }).then((res) => res.data);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Erro na requisição');
  }
};

export async function updateMove(
  playerType: 'BUG' | 'JUNIOR',
  cardName: string,
): Promise<GameProps> {
  const token = localStorage.getItem('@JrVsBug:token');
  try {
    const response = await api
      .post(
        'move',
        {
          playerType,
          name: cardName,
        },
        { headers: { token } },
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }
}

export async function updateSkipMove(idGame: number, playerId?: number): Promise<GameProps> {
  try {
    const response = await api
      .post('skipround', { player: playerId, idGame })
      .then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }
}

export async function updateRound(decks?: Decks): Promise<GameProps> {
  const token = localStorage.getItem('@JrVsBug:token');
  try {
    const response = await api
      .post(
        'finishround',
        {
          bugHand: decks?.bugHand,
          juniorHand: decks?.juniorHand,
        },
        { headers: { token } },
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }
}
