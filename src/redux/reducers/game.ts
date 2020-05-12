import bugImg from '../../assets/bug.png';
import devImg from '../../assets/player.png';

import { Action, State, PlayerState } from '../types';

const gameState: State = {
  players: [
    {
      id: '0',
      playerName: 'bug',
      mana: 20,
      health: 20,
      imgUrl: bugImg,
      deck: [
        {
          id: 'ICANT',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 1',
          manaUsagePoints: 5,
        },
        {
          id: 'BADWRITTENCODE',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 2',
          manaUsagePoints: 5,
        },
        {
          id: 'LOSETHEDAILY',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 3',
          manaUsagePoints: 5,
        },
        {
          id: 'WRONGENDPOINT',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 4',
          manaUsagePoints: 5,
        },
        {
          id: 'LOOSINGCONTACT',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 5',
          manaUsagePoints: 5,
        },
        {
          id: 'BADTIMEMANAGEMENT',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 6',
          manaUsagePoints: 5,
        },
        {
          id: 'GITCONFLICT',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 7',
          manaUsagePoints: 5,
        },
        {
          id: 'PANDEMIC',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 8',
          manaUsagePoints: 5,
        },
        {
          id: 'NOTESTS',
          playerId: '0',
          name: 'carta1',
          description: 'descricao da carta 9',
          manaUsagePoints: 5,
        },
      ],
    },
    {
      id: '1',
      playerName: 'player',
      mana: 20,
      health: 20,
      imgUrl: devImg,
      deck: [
        {
          id: 'COFFEECARD',
          playerId: '1',
          name: 'ganhar mana',
          description: 'cartinha q ganha mana',
          manaUsagePoints: 5,
        },
        {
          id: 'CHANGEEXPJRPOWER',
          playerId: '1',
          name: 'atacar bug',
          description: 'cartinha q causa dano no bug',
          manaUsagePoints: 5,
        },
        {
          id: 'ACTIVEANTIVIRUS',
          playerId: '1',
          name: 'gasta mana',
          description: 'cartinha q gasta mana',
          manaUsagePoints: 5,
        },
        {
          id: 'TECHLEADPOWER',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 4',
          manaUsagePoints: 5,
        },
        {
          id: 'FRAMEWORK',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 5',
          manaUsagePoints: 5,
        },
        {
          id: 'DEBUG',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 6',
          manaUsagePoints: 5,
        },
        {
          id: 'STACKTRACE',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 7',
          manaUsagePoints: 5,
        },
        {
          id: 'COFFEEBREAKZUP',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 8',
          manaUsagePoints: 5,
        },
        {
          id: 'STACKOVERFLOW',
          playerId: '1',
          name: 'carta1',
          description: 'descricao da carta 9',
          manaUsagePoints: 5,
        },
      ],
    },
  ],
};

export default function game(state = gameState, action: Action) {
  let newState = [];
  switch (action.type) {
    case 'COFFEECARD':
      newState = state.players.map((player) =>
        player.id === action.id ? { ...player, mana: player.mana += 5 } : player,
      );
      return { ...state, players: newState };
    case 'CHANGEEXPJRPOWER':
      newState = state.players.map((player) =>
        player.id !== action.id ? { ...player, health: player.health -= 5 } : player,
      );
      return { ...state, players: newState };
    case 'ACTIVEANTIVIRUS':
      newState = state.players.map((player) =>
        player.id === action.id ? { ...player, mana: player.mana -= 2 } : player,
      );
      return { ...state, players: newState };
    default:
      return state;
  }
}
