// import functions and grab DOM elements
console.log('i am here');
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('guess');
const userMessage = document.getElementById('user-message');
const chances = document.getElementById('chances');
console.log('guess-button');



// initialize global state
let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 4;
// set event listeners 

guessButton.addEventListener('click', ()=>{
numGuesses--;

console.log(numGuesses);
const userGuessValue = Number(userGuess.value);
chances.textContent = numGuesses;

if (userGuessValue === randomNum) {
  userMessage.textContent = 'You Win!'
} else if (numGuesses === 0){
  userMessage.textContent = 'Out Of Guesses!'
guessButton.disabled = true;
} else if (userGuessValue > randomNum) {
  userMessage.textContent = 'Guess too high!'
} else if (userGuessValue < randomNum) {
  userMessage.textContent = 'Guess too low!'

} 

})



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
