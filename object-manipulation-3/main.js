/* eslint-disable no-unused-vars */

// ^--- i couldn't commit bc 'play()' was 'never called'
// ^--- so i did this
// it's the ONLY unused-var

console.log('Lodash is loaded:', typeof _ !== 'undefined');

// 52 cards, 4 suits x 13 values
// suit: Spades, Clubs, Diamonds, Hearts
// face: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
// rank: 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10

const deckBase = [
  { suit: 'Clubs', rank: 11, face: 'A' },
  { suit: 'Clubs', rank: 2, face: '2' },
  { suit: 'Clubs', rank: 3, face: '3' },
  { suit: 'Clubs', rank: 4, face: '4' },
  { suit: 'Clubs', rank: 5, face: '5' },
  { suit: 'Clubs', rank: 6, face: '6' },
  { suit: 'Clubs', rank: 7, face: '7' },
  { suit: 'Clubs', rank: 8, face: '8' },
  { suit: 'Clubs', rank: 9, face: '9' },
  { suit: 'Clubs', rank: 10, face: '10' },
  { suit: 'Clubs', rank: 10, face: 'Jack' },
  { suit: 'Clubs', rank: 10, face: 'Queen' },
  { suit: 'Clubs', rank: 10, face: 'King' },
  { suit: 'Spades', rank: 11, face: 'A' },
  { suit: 'Spades', rank: 2, face: '2' },
  { suit: 'Spades', rank: 3, face: '3' },
  { suit: 'Spades', rank: 4, face: '4' },
  { suit: 'Spades', rank: 5, face: '5' },
  { suit: 'Spades', rank: 6, face: '6' },
  { suit: 'Spades', rank: 7, face: '7' },
  { suit: 'Spades', rank: 8, face: '8' },
  { suit: 'Spades', rank: 9, face: '9' },
  { suit: 'Spades', rank: 10, face: '10' },
  { suit: 'Spades', rank: 10, face: 'Jack' },
  { suit: 'Spades', rank: 10, face: 'Queen' },
  { suit: 'Spades', rank: 10, face: 'King' },
  { suit: 'Hearts', rank: 11, face: 'A' },
  { suit: 'Hearts', rank: 2, face: '2' },
  { suit: 'Hearts', rank: 3, face: '3' },
  { suit: 'Hearts', rank: 4, face: '4' },
  { suit: 'Hearts', rank: 5, face: '5' },
  { suit: 'Hearts', rank: 6, face: '6' },
  { suit: 'Hearts', rank: 7, face: '7' },
  { suit: 'Hearts', rank: 8, face: '8' },
  { suit: 'Hearts', rank: 9, face: '9' },
  { suit: 'Hearts', rank: 10, face: '10' },
  { suit: 'Hearts', rank: 10, face: 'Jack' },
  { suit: 'Hearts', rank: 10, face: 'Queen' },
  { suit: 'Hearts', rank: 10, face: 'King' },
  { suit: 'Diamonds', rank: 11, face: 'A' },
  { suit: 'Diamonds', rank: 2, face: '2' },
  { suit: 'Diamonds', rank: 3, face: '3' },
  { suit: 'Diamonds', rank: 4, face: '4' },
  { suit: 'Diamonds', rank: 5, face: '5' },
  { suit: 'Diamonds', rank: 6, face: '6' },
  { suit: 'Diamonds', rank: 7, face: '7' },
  { suit: 'Diamonds', rank: 8, face: '8' },
  { suit: 'Diamonds', rank: 9, face: '9' },
  { suit: 'Diamonds', rank: 10, face: '10' },
  { suit: 'Diamonds', rank: 10, face: 'Jack' },
  { suit: 'Diamonds', rank: 10, face: 'Queen' },
  { suit: 'Diamonds', rank: 10, face: 'King' }
];

// play(array of strings, int)

// pHands = [ { name: 'name1', hand: [], score: 0 }, ...];

function play(players, handSize) {
  // generate pHands/players object
  const pHands = [];
  for (let i = 0; i < players.length; i++) {
    pHands[i] = { name: players[i], hand: [], score: 0 };
  }
  // shuffle three times, deal 'handSize' # of cards, tally score and report to console
  (function deal(handSize) {
    // shuffle 3x
    const deck = deckBase.slice();
    const shuffle1 = deck.sort(() => Math.random() - 0.5);
    const shuffle2 = shuffle1.sort(() => Math.random() - 0.5);
    const shuffledDeck = shuffle2.sort(() => Math.random() - 0.5);
    // deal handSize# cards
    for (let h = 0; h < handSize; h++) {
      for (let i = 0; i < pHands.length; i++) {
        pHands[i].hand[h] = shuffledDeck.shift();
      }
    }
    // tally score
    for (let j = 0; j < pHands.length; j++) {
      for (let k = 0; k < pHands[j].hand.length; k++) {
        pHands[j].score += pHands[j].hand[k].rank;
      }
    }
    // report results
    pHands.sort((a, b) => a.score - b.score);
    console.log(`The winner is ${pHands[pHands.length - 1].name}, with a score of ${pHands[pHands.length - 1].score}!`);
    // console.log('pHands:', pHands);
  })(handSize);
}
