const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

const name = prompt('Please enter your name : ');
console.log(`\nHey there ${name}, welcome to Number Guessing Game!`);
 
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  let input = prompt('Between 0-100, guess the secret number ');

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  if (input == numberInMind){
    console.log('\nThe secret number is ' + numberInMind + ', CONGRATULATIONS ' + name +'!, YOU WIN.')
    return;
  }
  else if (input < numberInMind){
    console.log('\nOops, number ' + (Number(input)) + ' is too small. Guess again.')
  }
  else if (input > numberInMind){
    console.log('\nOops, number ' + (Number(input)) + ' is too large. Guess again')
  }
}

// Bonus Point: prompt user and provide option for user to start a new game after winning