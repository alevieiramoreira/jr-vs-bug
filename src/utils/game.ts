import { CardProps, PlayerProps, Decks, GameProps } from '../@types/types';
import api from '../services/api';

export function filterUnusedCards(deck?: CardProps[]) {
  const filteredDeck = deck?.filter((card) => !card.isSelected);

  return filteredDeck;
}

export function updateMove(player: PlayerProps, idGame: string, cardName: string) {
  api.post('move', {
    player: player.nickname,
    idGame,
    cardName,
  });

  const fakeResponse: GameProps = {
    id: '1',
    move: 1,
    status: 'playing',
    players: [
      {
        life: 14,
        mana: 20,
        type: 'BUG',
        imgUrl: 'https://i.imgur.com/slkFCKv.png',
        cards: [
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
        id: '1',
        life: 20,
        mana: 15,
        type: 'JUNIOR',
        nickname: 'mlkpiranha',
        imgUrl: 'https://i.imgur.com/P9DAD9G.png',
        cards: [
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

export function updateSkipMove(idGame: string, playerId?: string) {
  api.post('skipround', { player: playerId, idGame });
}

export function updateRound(decks?: Decks) {
  api.post('finishround', decks);

  const fakeResponse: GameProps = {
    id: '1',
    move: 1,
    status: 'playing',
    players: [
      {
        life: 14,
        mana: 20,
        type: 'BUG',
        imgUrl: 'https://i.imgur.com/slkFCKv.png',
        cards: [
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
        id: '1',
        life: 20,
        mana: 15,
        type: 'JUNIOR',
        nickname: 'mlkpiranha',
        imgUrl: 'https://i.imgur.com/P9DAD9G.png',
        cards: [
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
