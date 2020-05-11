import bugImg from '../../assets/bug.png';
import devImg from '../../assets/player.png';

import { Action, State } from '../types';

const gameState: State = {
  players: [
    {
      playerName: 'bug',
      mana: 20,
      health: 20,
      imgUrl: bugImg,
      deck: [
        {
          id: '1',
          name: 'carta1',
          description: 'descricao da carta 1',
          manaUsagePoints: 5,
        },
        {
          id: '2',
          name: 'carta1',
          description: 'descricao da carta 2',
          manaUsagePoints: 5,
        },
        {
          id: '3',
          name: 'carta1',
          description: 'descricao da carta 3',
          manaUsagePoints: 5,
        },
        {
          id: '4',
          name: 'carta1',
          description: 'descricao da carta 4',
          manaUsagePoints: 5,
        },
        {
          id: '5',
          name: 'carta1',
          description: 'descricao da carta 5',
          manaUsagePoints: 5,
        },
        {
          id: '6',
          name: 'carta1',
          description: 'descricao da carta 6',
          manaUsagePoints: 5,
        },
        {
          id: '7',
          name: 'carta1',
          description: 'descricao da carta 7',
          manaUsagePoints: 5,
        },
        {
          id: '8',
          name: 'carta1',
          description: 'descricao da carta 8',
          manaUsagePoints: 5,
        },
        {
          id: '9',
          name: 'carta1',
          description: 'descricao da carta 9',
          manaUsagePoints: 5,
        },
      ],
    },
    {
      playerName: 'player',
      mana: 20,
      health: 20,
      imgUrl: devImg,
      deck: [
        {
          id: 'COFFEECARD',
          name: 'carta1',
          description: 'descricao da carta 1',
          manaUsagePoints: 5,
        },
        {
          id: '2',
          name: 'carta1',
          description: 'descricao da carta 2',
          manaUsagePoints: 5,
        },
        {
          id: '3',
          name: 'carta1',
          description: 'descricao da carta 3',
          manaUsagePoints: 5,
        },
        {
          id: '4',
          name: 'carta1',
          description: 'descricao da carta 4',
          manaUsagePoints: 5,
        },
        {
          id: '5',
          name: 'carta1',
          description: 'descricao da carta 5',
          manaUsagePoints: 5,
        },
        {
          id: '6',
          name: 'carta1',
          description: 'descricao da carta 6',
          manaUsagePoints: 5,
        },
        {
          id: '7',
          name: 'carta1',
          description: 'descricao da carta 7',
          manaUsagePoints: 5,
        },
        {
          id: '8',
          name: 'carta1',
          description: 'descricao da carta 8',
          manaUsagePoints: 5,
        },
        {
          id: '9',
          name: 'carta1',
          description: 'descricao da carta 9',
          manaUsagePoints: 5,
        },
      ],
    },
  ],
};

export default function game(state = gameState.players, action: Action) {
  switch (action.type) {
    case 'COFFEECARD':
      return console.log('FOI');
    default:
      return state;
  }
}
