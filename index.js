
   
  class Deck {
    
    constructor() {
        this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
    
  
    shuffle() {
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor((Math.random()  * m--)/2);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  }
var  deck1 = new Deck;
console.log(deck1.deck);
deck1.shuffle();
deck2=[];
// console.log(deck1.deck);

var players = [ "user", " computer"];

// var players = deck1.slice(0,12); 
//  console.log(deck1.deck);


/// Distribute The cards between the player and computer
// var players = [
//   'user',
//   'computer'];

//var PLAYERS_LENGTH = players.length;

// 
 
let card = Deck ;
var user = [];
var comp = [];
var card_count = 0;

var count = 0 , countp = 0 ,countc = 0;
  
//  generating cards for player

hit();
hit();
console.log("cards for player");
console.log(user);
countp = count1();
console.log("User: "+countp+ "\n");
console.log("cards for computer");
console.log(comp);
// countc = count2();
console.log("computer :"+countc);

//Counting total cards of Player
function count1() {
  for (var s = 0; s < user.length; s++) 
  {
    count+=user[s].value;

    if(user[0].name=='A' && user[s].name=='K'|| user[0].name=='A' && user[s].name=='Q'||
    user[0].name=='A' && user[s].name=='J'||user[0].name=='K' && user[s].name=='A'||
    user[0].name=='Q' && user[s].name=='A'||user[0].name=='J' && user[s].name=='A')
    {  console.log("\n B L A C K J A C K !\n Player Won!")
    }

    else if (user[s].name == "A" && count<11)
    {
      user[s].value=11;     
      console.log("-- A is 11 --")
      count+=10;
    }
    else if(user[s].value == "A" && count>11)
    {
      user[s].value=1;
      console.log("-- A is 1 --")
    }

    
}
return count;
}


function hit() {
  deck2.push(deck1);
  console.log(deck2,"hi");
  // comp.push(card.pop());
}