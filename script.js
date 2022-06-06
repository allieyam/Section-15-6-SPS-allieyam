//scissors paper stone game with user input
// // Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var button = document.querySelector("button");

let playerScore = 0;
let computerScore = 0;
let roundsLeft = 10;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

function playingGame(playerChoice) {
  const computerChoice = randomRoll(computerChoices);
  comparingResults(playerChoice, computerChoice);
  console.log("player choice", playerChoice, "computer choice", computerChoice);
}

const computerChoices = ["scissors", "paper", "stone"];
function randomRoll(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomChoice = arr[randomIndex];
  return randomChoice;
}

function comparingResults(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  const resultElement = document.querySelector(".result");
  const playerScoreElement = document.querySelector(".player");
  const computerScoreElement = document.querySelector(".computer");
  const roundsLeftElement = document.querySelector(".rounds-left");
  const resultVisualElement = document.querySelector(".result-visual");
  if (computerChoice === humanChoice) {
    resultVisualElement.innerHTML = "tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore += 1;
      resultVisualElement.innerHTML = "you lose";
    } else {
      playerScore += 1;
      resultVisualElement.innerHTML = "you win";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore += 1;
      resultVisualElement.innerHTML = "you lose";
    } else {
      playerScore += 1;
      resultVisualElement.innerHTML = "you win";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore += 1;
      resultVisualElement.innerHTML = "you lose";
    } else {
      playerScore += 1;
      resultVisualElement.innerHTML = "you win";
    }
  }

  if (roundsLeft === 0) {
    roundsLeft = 10;
  } else {
    roundsLeft -= 1;
  }
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
  roundsLeftElement.innerHTML = roundsLeft;
  console.log("player score", playerScore, "rounds left", roundsLeft);
}

rockButton.addEventListener("click", function () {
  playingGame("rock");
});
paperButton.addEventListener("click", function () {
  playingGame("paper");
});
scissorsButton.addEventListener("click", function () {
  playingGame("scissors");
});
