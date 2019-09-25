var deck = [];
function sol (){

   // build suits
   var suits = [];
   suits['spades'] = [
      ['A','spade'],
      ['2','spade'],
      ['3','spade'],
      ['4','spade'],
      ['5','spade'],
      ['6','spade'],
      ['7','spade'],
      ['8','spade'],
      ['9','spade'],
      ['10','spade'],
      ['J','spade'],
      ['Q','spade'],
      ['K','spade']
   ];
   suits['hearts'] = [
      ['A','heart'],
      ['2','heart'],
      ['3','heart'],
      ['4','heart'],
      ['5','heart'],
      ['6','heart'],
      ['7','heart'],
      ['8','heart'],
      ['9','heart'],
      ['10','heart'],
      ['J','heart'],
      ['Q','heart'],
      ['K','heart']
   ];
   suits['diamonds'] = [
      ['A','diamond'],
      ['2','diamond'],
      ['3','diamond'],
      ['4','diamond'],
      ['5','diamond'],
      ['6','diamond'],
      ['7','diamond'],
      ['8','diamond'],
      ['9','diamond'],
      ['10','diamond'],
      ['J','diamond'],
      ['Q','diamond'],
      ['K','diamond']
   ];
   suits['clubs'] = [
      ['A','club'],
      ['2','club'],
      ['3','club'],
      ['4','club'],
      ['5','club'],
      ['6','club'],
      ['7','club'],
      ['8','club'],
      ['9','club'],
      ['10','club'],
      ['J','club'],
      ['Q','club'],
      ['K','club']
   ];


   
   var s = [];      // new stack

   
   var w = [];          // 2nd stack 

    deck = create(deck,suits);
    deck = shuffle(deck);

    function create(deck,suits) {
         for (let suit in suits) {
            suit = suits[suit];
            
           for (var card in suit ) {
              card = suit[card];
              deck.push(card);
            
           }     
         }
         return deck;
   } 
}
sol();

   function shuffle(deck)
   {
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


var players = [ "user", " computer"];
let cards = sol();
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
 user.push(cards);
  //console.log(deck2,"hi");
   comp.push(cards);
}

 function count1() {
   console.log("hi")

 // var cards = card;
  
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


          
      