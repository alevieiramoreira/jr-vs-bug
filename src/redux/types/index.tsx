export interface Action {
  type: string;
  id?: string;
}

export interface State {
  players: PlayerState[];
}

export interface PlayerState {
  id: string;
  playerName: string;
  mana: number;
  health: number;
  imgUrl?: string;
  deck: CardState[];
}

export interface CardState {
  id: string;
  playerId: string;
  name: string;
  description?: string;
  manaUsagePoints: number;
}

