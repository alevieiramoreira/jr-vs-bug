import { PlayerProps, GameProps, Decks } from '../@types/game';
import api from './api';

export const getGameStart = async (): Promise<GameProps> => {
  try {
    const response = await api.get('game').then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Deu erro kkkk');
  }
};

export const updateMove = (player: PlayerProps, idGame: number, cardName: string) => {
  try {
    api
      .post('move', {
        player: player.nickname,
        idGame,
        cardName,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }

  const fakeResponse: GameProps = {
    id: 1,
    move: 2,
    status: 'running',
    winner: null,
    players: [
      {
        life: 14,
        mana: 20,
        type: 'BUG',
        imgUrl: 'https://i.imgur.com/slkFCKv.png',
        hand: [
          {
            damage: 2,
            manaPoints: -4,
            name: 'GOLPENAOCONSIGO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 2,
            manaPoints: -6,
            name: 'CODIGOMALESCRITO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 5,
            manaPoints: -3,
            name: 'PERDEUADAILY',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 4,
            manaPoints: -4,
            name: 'ENDPOINTBATENDOERRADO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
        ],
      },
      {
        id: 1,
        life: 20,
        mana: 15,
        type: 'JUNIOR',
        nickname: 'mlkpiranha',
        imgUrl: 'https://i.imgur.com/P9DAD9G.png',
        hand: [
          {
            damage: 0,
            manaPoints: 4,
            name: 'ZUP',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/y8xXHlS.png',
          },
          {
            damage: 2,
            manaPoints: 2,
            name: 'ANTIVIRUS',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/3yV7yxV.png',
          },
          {
            damage: 3,
            manaPoints: -3,
            name: 'FRAMEWORK',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/vekhPge.png',
          },
          {
            damage: 6,
            manaPoints: -4,
            name: 'CHANGEEXPERIENCEPOWER',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/pTYltoR.png',
          },
        ],
      },
    ],
  };

  return fakeResponse;
};

export function updateSkipMove(idGame: number, playerId?: number) {
  try {
    return api.post('skipround', { player: playerId, idGame });
  } catch (error) {
    throw new Error('Msg de erro');
  }
}

export function updateRound(decks?: Decks) {
  try {
    api.post('finishround', decks);
  } catch (error) {
    throw new Error('Msg de erro');
  }

  const fakeResponse: GameProps = {
    id: 1,
    move: 3,
    status: 'running',
    winner: null,
    players: [
      {
        life: 14,
        mana: 20,
        type: 'BUG',
        imgUrl: 'https://i.imgur.com/slkFCKv.png',
        hand: [
          {
            damage: 2,
            manaPoints: -4,
            name: 'GOLPENAOCONSIGO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 2,
            manaPoints: -6,
            name: 'CODIGOMALESCRITO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 5,
            manaPoints: -3,
            name: 'PERDEUADAILY',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
          {
            damage: 4,
            manaPoints: -4,
            name: 'ENDPOINTBATENDOERRADO',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/bCMLzxt.png',
          },
        ],
      },
      {
        id: 1,
        life: 20,
        mana: 20,
        type: 'JUNIOR',
        nickname: 'mlkpiranha',
        imgUrl: 'https://i.imgur.com/P9DAD9G.png',
        hand: [
          {
            damage: 0,
            manaPoints: 4,
            name: 'ZUP',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/y8xXHlS.png',
          },
          {
            damage: 2,
            manaPoints: 2,
            name: 'ANTIVIRUS',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/3yV7yxV.png',
          },
          {
            damage: 3,
            manaPoints: -3,
            name: 'FRAMEWORK',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/vekhPge.png',
          },
          {
            damage: 6,
            manaPoints: -4,
            name: 'CHANGEEXPERIENCEPOWER',
            description: 'nao consigo fazer nada sou inutil',
            imgUrl: 'https://i.imgur.com/pTYltoR.png',
          },
        ],
      },
    ],
  };

  return fakeResponse;
}
