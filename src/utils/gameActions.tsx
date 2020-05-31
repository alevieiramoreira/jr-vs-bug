import { CardProps, Decks } from '../@types/game';

export function filterUnusedCards(decks: Decks, playerType: 'BUG' | 'JUNIOR') {
  let filteredDeck;

  if (playerType === 'BUG') {
    filteredDeck = decks.bugHand.filter((card) => !card.selected);
  } else {
    filteredDeck = decks.juniorHand.filter((card) => !card.selected);
  }

  return filteredDeck;
}

export function getRandomCard(deck: CardProps[]): CardProps {
  return deck[Math.floor(Math.random() * deck?.length)];
}
