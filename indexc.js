var deck = []
function card (valu) {
  
// let deck = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

for (let suit in suits) {
  for (let value in values) {
    deck.push(`${values[value]} of ${suits[suit]}`);
  }
} 
//console.log(deck);
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
console.log(deck);
console.log(deck.length);


// creating players
var players = [ "user", " computer"];
let cards = card();
var user = [];
var comp = [];
var card_count = 0;

var count = 0 , countu = 0 ,countc = 0;
//  generating cards for player

hit();
hit();
console.log("cards for player");
console.log(user);
countu = count1();
console.log("User: "+countu+ "\n");
//distribute();
console.log("cards for computer");
console.log(comp);
countc = count2();
console.log("computer :"+countc);


function hit() {
 user.push(cards.pop());
  //console.log(deck2,"hi");
   comp.push(cards.pop());
}

 function count1() {
   console.log("hi")
  var cards = card;
  
  var stack = [];
  let m = deck.length ;
  
  // r = Math.floor(((Math.random() *  m-- )/ 4));
  for (s = 1 ; s<= deck.length ; s++)
  {
    if(s.length <= 13 ){
      stack.pop(deck[s]);
      stack.push(stack.pop());
    }
  }

 //stack.push(r);
 console.log("User: "+countu+ "\n");

   console.log(stack);
  user.push(cards);
   console.log(deck.length);
}


function count2() {
  console.log("hello");
//   var cards = card;
//   var stack = [];
//   q = Math.floor((Math.random(deck) / 4));
//   stack.push(q);
//    console.log(stack);
}




const array = [1,2,3,4,5,6,7,8,9,10];

shuffle(array);

let x = [];
let y = [];

for(let i=0;i<array.length;i++) {
  if(i % 2 === 0) {
    x.push(array[i]);
    console.log(x);
  } else {
    y.push(array[i]);
    console.log(y);

  }
}

