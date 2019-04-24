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
var activePlayer = 0;

ini();

// Setup event handler
document.querySelector(".btn-roll").addEventListener("click", function() {
  // generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // display result
  var dieDOM = document.querySelector(".dice");
  dieDOM.style.display = "block";
  dieDOM.src = "dice-" + dice + ".png";

  // update round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    switchPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  // player elected to hold current score
  scores[activePlayer] += roundScore;
  // update UI
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // check if player won the game
  if (scores[activePlayer] >= 100) {
    document.querySelector("#name-" + activePlayer).textContent =
      "Winner, winner chicken dinner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchPlayer();
  }
});

function switchPlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  roundScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", ini);

function ini() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  // Set initial state of the board
  // Change CSS style of element
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
