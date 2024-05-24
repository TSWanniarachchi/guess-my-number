"use strict";

/////////////////////////////////////////////////
// DOM Elements

const body = document.querySelector("body");

const lblNumber = document.querySelector(".number");
const lblMessage = document.querySelector(".message");
const lblScore = document.querySelector(".score");
const lblHighscore = document.querySelector(".highscore");

const inputGuess = document.querySelector(".guess");

const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");

/////////////////////////////////////////////////
// Variables

let secretNumber = 0;
let score = 0;
let highscore = 0;

/////////////////////////////////////////////////
// Functions

// Generate a random number between 1 and 20
const randomInt = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// Display a message in the message label
const displayMessage = function (message) {
  lblMessage.textContent = message;
};

///////////////////////////////////////
// Event Handlers

const restartGame = function () {
  secretNumber = randomInt();
  score = 20;

  displayMessage("Start guessing...");
  lblNumber.textContent = "?";
  lblScore.textContent = score;
  inputGuess.value = "";

  body.style.backgroundColor = "#222";
  lblNumber.style.width = "15rem";
};

const processGuess = function () {
  const guess = +inputGuess.value;

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    lblNumber.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    lblNumber.style.width = "30rem";

    // Set highscore
    if (score > highscore) {
      highscore = score;
      lblHighscore.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score--;
      lblScore.textContent = score;
    } else {
      displayMessage("👎 You lost the game!");
      lblScore.textContent = 0;
    }
  }
};

///////////////////////////////////////
// Event Listeners

btnAgain.addEventListener("click", restartGame);
btnCheck.addEventListener("click", processGuess);

///////////////////////////////////////
// Initialization Code

// Initialize the game
(function () {
  secretNumber = randomInt();
  score = 20;

  lblScore.textContent = score;
  lblHighscore.textContent = highscore;
})();
