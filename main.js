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
let gameOver = false;

const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector(".result p");

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = rockPaperScissors(humanChoice, computerChoice);
    resultDisplay.textContent = result;

    if (gameOver === false) {
      if (result === "You Scored!") {
        userScore++;
        userScoreDisplay.textContent = userScore;
      }

      if (result === "Computer Scored!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }

      if (userScore === 5) {
        resultDisplay.textContent = "User Win!";
        gameOver = true;
      }
      if (computerScore === 5) {
        resultDisplay.textContent = "Computer Win!";
        gameOver = true;
      }
    }
    if (gameOver === true) {
      userScore = 0;
      computerScore = 0;
      userScoreDisplay.textContent = userScore;
      computerScoreDisplay.textContent = computerScore;
      gameOver = false;
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
    return "Computer Scored!";
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    return "You Scored!";
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    return "You Scored!";
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    return "Computer Scored!";
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    return "You Scored!";
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    return "Computer Scored!";
  }
}
