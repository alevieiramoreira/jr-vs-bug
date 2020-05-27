import { CardProps } from '../@types/game';

export function filterUnusedCards(deck?: CardProps[]) {
  return deck?.filter((card) => !card.isSelected);
}

export function getRandomCard(deck?: CardProps[]) {
  return deck?.[Math.floor(Math.random() * deck?.length)];
}
