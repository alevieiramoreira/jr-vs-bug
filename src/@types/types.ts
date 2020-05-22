export interface Game {
  id: string;
  move: number;
  status: 'playerWin' | 'bugWin' | 'playing';
  players: PlayerProps[];
}

export interface PlayerProps {
  id?: string;
  nickname?: string;
  life: number;
  mana: number;
  type: string;
  imgUrl: string;
  cards: CardProps[];
}

export interface CardProps {
  name: string;
  damage: number;
  manaPoints: number;
  description: string;
  imgUrl: string;
  isSelected?: boolean;
}
