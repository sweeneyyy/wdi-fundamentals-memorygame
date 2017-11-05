var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//check for match
var checkForMatch = function (){
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
	alert("Sorry, try again.");	
  }
}
//when user flips, add that card to array of cards in play. if flipped two cards, check for match.
var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId]);  
	console.log("User flipped " + cards[cardId]);
	//find number of cards flipped
	if (cardsInPlay.length === 2) {
	checkForMatch();	
  }
}
flipCard(0);
flipCard(2);





