// Define a Card Suit 

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    if (card.endsWith('\u2663')) {
      return 'clubs';
    } else if (card.endsWith("\u2660")) {
      return 'spades';
    } else if (card.endsWith("\u2665")) {
      return 'hearts';
    } else if (card.endsWith("\u2666")) {
      return 'diamonds';
    }
}