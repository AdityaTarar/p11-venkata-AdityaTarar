// Your solution goes here
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;

  while (guessCount < totalGuesses) {
    let guess = prompt(
      guessCount === 0
        ? "Enter a number between 1 and 100."
        : guess < numToGuess
        ? `${guess} is too small. Guess a larger number.`
        : `${guess} is too large. Guess a smaller number.`
    );

    if (guess === null) {
      return 0;
    }

    guess = Number(guess);

    if (isNaN(guess)) {
      alert("Please enter a number.");
      continue;
    }

    guessCount++;

    if (guess === numToGuess) {
      return guessCount;
    }
  }

  return 0;
}
