// Get necessary DOM elements
const msg = document.getElementById("msg"); // Message element
const userScoreMsg = document.getElementById("userScoreMsg"); // User score element
const compScoreMsg = document.getElementById("compScoreMsg"); // Computer score element
const mesContainer = document.querySelector(".msg-container"); // Message container
const compChoiceMsg = document.querySelector("#compChoiceMsg"); // Computer choice message
let userScore = 0; // Initialize user score
let computerScore = 0; // Initialize computer score

// Get all choices and add click event listeners
const choices = document.querySelectorAll(".choice"); // All game choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get user choice
    playGame(userChoice); // Call playGame function with user choice
  });
});

// Function to play the game based on user choice
function playGame(userChoice) {
  const compChoice = genCompChoice(); // Generate computer choice
  compChoiceMsg.innerHTML = `Computer chooses ${compChoice}`; // Display computer choice
  compChoiceMsg.classList.remove("hide"); // Remove 'hide' class from computer choice message

  // Define outcomes for different choices
  const outcomes = {
    rock: {
      wins: "scissors",
      loses: "paper",
    },
    paper: {
      wins: "rock",
      loses: "scissors",
    },
    scissors: {
      wins: "paper",
      loses: "rock",
    },
  };

  // Determine game result and update scores and messages accordingly
  if (userChoice === compChoice) {
    // Tie
    msg.textContent = "It's a deadlock! Play again.";
    msg.style.backgroundColor = "gray";
  } else if (userChoice === outcomes[compChoice].wins) {
    // Computer wins
    msg.textContent = `Ouch! Looks like ${compChoice} overpowers ${userChoice}. Don't give up!`;
    computerScore++;
    compScoreMsg.innerHTML = computerScore;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  } else {
    // User wins
    msg.textContent = `You win! ${userChoice} conquers ${compChoice}. Nice one!" `;
    userScore++;
    userScoreMsg.innerHTML = userScore;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  }
}

// Function to generate computer's choice
function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
}
