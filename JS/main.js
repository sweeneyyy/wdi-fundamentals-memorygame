var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

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
	cardsInPlay.push(cards[cardId].rank);  
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//find number of cards flipped
	if (cardsInPlay.length === 2) {
	checkForMatch();	
  }
}
flipCard(0);
flipCard(2);





