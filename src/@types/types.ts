export interface GameProps {
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
  type: 'JUNIOR' | 'BUG';
  imgUrl: string;
  cards: CardProps[];
}

export interface CardProps {
  name: string;
  damage: number;
  manaPoints: number;
  description: string;
  type: 'JUNIOR' | 'BUG';
  imgUrl: string;
  isSelected?: boolean;
}
