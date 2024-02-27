// import words array & jumble function
import * as utils from './utils.js'
import * as word from './words.js'
const jumbledWord = document.getElementById("jumbled-word");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const resultMessage = document.getElementById("result");

let currentWord = "";

function setup() {
  currentWord = word.words[Math.floor(Math.random() * word.words.length)];
  jumbledWord.textContent = utils.jumble(currentWord);
}

function handleGuess(event) {
  event.preventDefault();
  const guess = guessInput.value;

  if (guess === currentWord) {
    resultMessage.textContent = "You win!";
  } else {
    resultMessage.textContent = "Sorry, try again.";
  }
}

setup();
submitButton.addEventListener("click", handleGuess);
