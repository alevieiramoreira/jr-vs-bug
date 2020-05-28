export interface GameProps {
  id: number;
  move: number;
  status: 'RUNNING' | 'FINISHED';
  winner: 'BUG' | 'JUNIOR' | null;
  players: PlayerProps[];
}

export interface PlayerProps {
  id?: number;
  nickname?: string;
  life: number;
  mana: number;
  type: 'JUNIOR' | 'BUG';
  imageUrl: string;
  hand: CardProps[];
}

export interface CardProps {
  name: string;
  damage: number;
  manaPoints: number;
  description: string;
  type: 'JUNIOR' | 'BUG';
  juniorManaPoints?: number;
  imgUrl: string;
  isSelected?: boolean;
}

export interface Decks {
  juniorHand: CardProps[];
  bugHand: CardProps[];
}

export interface MovementData {
  updateMovement: boolean;
  text: string;
}
