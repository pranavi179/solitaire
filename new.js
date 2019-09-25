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

deck1 = shuffle(deck);
// console.log(deck1);
//console.log(deck.length);
// console.log(deck1.length);

// distribution 

// hdeck = (deck1.pop());
// if(deck1.pop()=){
//    console.log(hdeck);
// }
// console.log(deck1.length);
// console.log(hdeck);

let user1 = [];
let computer = [];
hdeck = deck1.slice(0,26);
//  console.log(hdeck);
 
for(let i=0;i<hdeck.length;i++) {
   if(i % 2 === 0)
   {
      user1.push(hdeck[i]);
   } 
   else {
      computer.push(hdeck[i]);
   }
   
}
console.log(user1);
console.log(computer);


//creating the stack to remaining elements
rdeck = deck1.slice(26,52);
console.log(rdeck);

// picking the card
// droping the card in new stack

var w = [];          // droping stack stack

function pick() {
   var pdeck = rdeck.pop();
   console.log(rdeck);
}
function drop(i) {
  // var ddeck = hdeck[i];
   // console.log(ddeck);
   // rdeck.push(ddeck.pop());
   var ddeck = prompt(" which card to drop?");
   if(ddeck != hdeck[i])
   {
      rdeck.push(ddeck.pop());
      console.log(ddeck);

   }
}

// to do search function
 function search() {
    
 }


 var players = [ "user", " comp"];
 // user 
 console.log("cards for player");
 let user = user1;
 user.push(user1);
  console.log(user);
  

// computer
  console.log("cards for computer");
  let comp = computer;
  comp.push(computer);
  console.log(comp);








   
// function isEqual() 
// { 
//    // let stack = shuffle();

//   // if length is not equal 
//   //if(a.length!=b.length) 
//   if(deck.length!=shuffle.length) {
//    for(var i=0;i<deck.length;i++) 
//    if(deck[i]==shuffle[i]) 
//     return "false"; 
//     return "if if statement is false enters into the if loop and checks elements can compare"; 
//    //  console.log(deck)[i];
//   } 

   
//   else
//   { 
//    return "false";
// //   //comapring each element of array 
// //    for(var i=0;i<deck.length;i++) 
// //    if(deck[i]!=shuffle[i]) 
// //     return "False"; 
// //     return "True"; 
//   } 
// } 
// var v = isEqual(); 
// console.log(v);



