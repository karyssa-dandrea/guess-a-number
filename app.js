// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('guess');
console.log('guess-button');



// initialize global state
let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 0;
// set event listeners 
guessButton.addEventListener('click', ()=>{
numGuesses = numGuesses + 1;
const userGuessValue = Number(userGuess.value);
console.log(userGuessValue);
console.log(randomNum);
if (userGuessValue === randomNum) {
  console.log("You win!");
} else if (numGuesses === 4){
console.log("Out of guesses!");

} else if (userGuessValue > randomNum) {
  console.log("Guess too high");
} else if (userGuessValue < randomNum) {
  console.log("Guess too low");
}

})



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
