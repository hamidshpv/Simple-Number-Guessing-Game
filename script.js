/**
 * Project: Number Guessing Game
 * Description: A simple game where you have to guess a randomly generated number between 0 and 100.
 */

// Generate a random number from 0 to 100
let numberToGuess = Math.floor(Math.random() * 101);
let attempts = 0;

function makeGuess() {
    // select the HTML elements
    let inputField = document.getElementById("playerGuessField");
    let resultMessage = document.getElementById("resultMessage");

    // Convert to a number
    let guess = parseInt(inputField.value);

    // Check if the player actually typed a number
    if (isNaN(guess)) {
        resultMessage.innerHTML = "This is not a number!";
    } else {
        // Count the attempt
        attempts = attempts + 1;

        // Compare the guess
        if (guess < numberToGuess) {
            resultMessage.innerHTML = "Too low! Try again.";
        } else if (guess > numberToGuess) {
            resultMessage.innerHTML = "Too high! Try again.";
        } else {
            resultMessage.innerHTML = "You won! It took you " + attempts + " attempts.";
            document.getElementById("guessButton").disabled = true;
            resultMessage.style.color = "green";
        }
    }

    // Clear the input field for the next try
    inputField.value = "";
}