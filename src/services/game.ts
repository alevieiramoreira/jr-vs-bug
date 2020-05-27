import { PlayerProps, GameProps, Decks } from '../@types/game';
import api from './api';

export const getGameStart = async (): Promise<GameProps> => {
  try {
    const response = await api.get('game').then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Erro na requisição');
  }
};

export async function updateMove(player: PlayerProps, cardName: string): Promise<GameProps> {
  try {
    const response = await api
      .post('move', {
        playerType: player.type,
        name: cardName,
      })
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
  try {
    const response = await api
      .post('finishround', {
        bugHand: decks?.bugHand,
        juniorHand: decks?.juniorHand,
      })
      .then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }
}
