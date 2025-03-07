// Function to generate a random choice for the computer (Rock, Paper, or Scissors).
function getRandomComputerResult() {
    // An array containing the possible choices.
    const options = ["Rock", "Paper", "Scissors"];
    // Generate a random index within the range of the options array's length.
    const randomIndex = Math.floor(Math.random() * options.length);
    // Return the choice at the randomly generated index.
    return options[randomIndex];
  }
  
  // Function to determine if the player has won the round based on the player's and computer's choices.
  function hasPlayerWonTheRound(player, computer) {
    // Check all the winning conditions for the player.
    return (
      (player === "Rock" && computer === "Scissors") || // Rock beats Scissors
      (player === "Scissors" && computer === "Paper") || // Scissors beats Paper
      (player === "Paper" && computer === "Rock") // Paper beats Rock
    );
  }
  
  // Initialize the player's and computer's scores to 0.
  let playerScore = 0;
  let computerScore = 0;
  
  // Function to determine the result of a round and update the scores accordingly.
  function getRoundResults(userOption) {
    // Get the computer's random choice.
    const computerResult = getRandomComputerResult();
  
    // Check if the player has won the round.
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      // Increment the player's score.
      playerScore++;
      // Return a message indicating the player's win and the choices made.
      return `Player wins! ${userOption} beats ${computerResult}`;
      // Check if it's a tie.
    } else if (computerResult === userOption) {
      // Return a message indicating a tie and the common choice made.
      return `It's a tie! Both chose ${userOption}`;
      // If not a win or tie, the computer must have won.
    } else {
      // Increment the computer's score.
      computerScore++;
      // Return a message indicating the computer's win and the choices made.
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  // Get references to HTML elements that will be updated dynamically.
  const playerScoreSpanElement = document.getElementById("player-score"); // Element to display the player's score.
  const computerScoreSpanElement = document.getElementById("computer-score"); // Element to display the computer's score.
  const roundResultsMsg = document.getElementById("results-msg"); // Element to display the round's result message.
  const winnerMsgElement = document.getElementById("winner-msg"); // Element to display the winner message.
  const optionsContainer = document.querySelector(".options-container"); // Container holding the option buttons.
  const resetGameBtn = document.getElementById("reset-game-btn"); // The reset button.
  
  // Function to update the UI with the results of a round.
  function showResults(userOption) {
    // Update the round result message.
    roundResultsMsg.innerText = getRoundResults(userOption);
    // Update the computer's score display.
    computerScoreSpanElement.innerText = computerScore;
    // Update the player's score display.
    playerScoreSpanElement.innerText = playerScore;
  
    // Check if either player or computer has reached a score of 3.
    if (playerScore === 3 || computerScore === 3) {
      // Display the winner message.
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      // Show the reset button.
      resetGameBtn.style.display = "block";
      // Hide the option buttons.
      optionsContainer.style.display = "none";
    }
  }
  
  // Function to reset the game to its initial state.
  function resetGame() {
    // Reset the scores to 0.
    playerScore = 0;
    computerScore = 0;
    // Update the score displays.
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    // Hide the reset button.
    resetGameBtn.style.display = "none";
    // Show the option buttons.
    optionsContainer.style.display = "block";
    // Clear the winner message.
    winnerMsgElement.innerText = "";
    // Clear the round results message.
    roundResultsMsg.innerText = "";
  }
  
  // Add an event listener to the reset button to call the resetGame function when clicked.
  resetGameBtn.addEventListener("click", resetGame);
  
  // Get references to the "Rock," "Paper," and "Scissors" buttons.
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  // Add an event listener to the "Rock" button to call showResults with "Rock" when clicked.
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  // Add an event listener to the "Paper" button to call showResults with "Paper" when clicked.
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  // Add an event listener to the "Scissors" button to call showResults with "Scissors" when clicked.
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
  