function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "rock";
  }

  if (computerChoice == 1) {
    return "paper";
  }

  if (computerChoice == 2) {
    return "scissors";
  }
}

let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector(".result p");

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = rockPaperScissors(humanChoice, computerChoice);

    if (result === "You Win!") {
      userScore++;
      userScoreDisplay.textContent = userScore;
    }

    if (result === "Computer Win!") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }

    if (userScore === 5) {
      resultDisplay.textContent = "User Win!";
    }
    if (computerScore === 5) {
      resultDisplay.textContent = "Computer Win!";
    }
  });
});

userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

function rockPaperScissors(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie!";
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    return "Computer Win!";
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    return "You Win!";
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    return "You Win!";
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    return "Computer Win!";
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    return "You Win!";
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    return "Computer Win!";
  }
}
