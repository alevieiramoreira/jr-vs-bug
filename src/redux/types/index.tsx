export interface Action {
  type: string;
  id?: string;
}

export interface State {
  players: PlayerState[];
}

export interface PlayerState {
  playerName: string;
  mana: number;
  health: number;
  imgUrl?: string;
  deck: CardState[];
}

export interface CardState {
  id: string;
  name: string;
  description: string;
  manaUsagePoints: number;
}
