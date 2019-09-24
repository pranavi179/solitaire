var deck = []
function card () {
  
// let deck = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

for (let suit in suits) {
  for (let value in values) {
    deck.push(`${values[value]} of ${suits[suit]}`);
  }
} 
console.log(deck);
return deck;
}
card();
function shuffle(deck){ 
  // console.log(shuffle);
  // const  deck  = this.deck;
  var m = deck.length, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    [deck[m], deck[i]] = [deck[i], deck[m]];
  }
  return deck;
}
shuffle(deck);
console.log(deck)
