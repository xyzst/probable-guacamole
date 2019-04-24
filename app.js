/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Keep track of player scores
var scores = [0, 0];
// Keep track of round score
var roundScore = 0;
// Who's turn is it? (0 == player1, 1 == player2)
var activePlayer = 1;

// Mutate element on HTML document
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
// Read element on HTML document
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// Set initial state of the board
// Change CSS style of element
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Setup event handler
document.querySelector(".btn-roll").addEventListener("click", function() {
  // generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // display result
  var dieDOM = document.querySelector(".dice");
  dieDOM.style.display = "block";
  dieDOM.src = "dice-" + dice + ".png";

  // update round score IF the rolled number was NOT a 1
});
