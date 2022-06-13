const choices = ["rock", "paper", "scissors"];

const winnerTable = {
  rock: {
    rock: "tie",
    paper: "computer",
    scissors: "human",
  },
  paper: {
    rock: "human",
    paper: "tie",
    scissors: "computer",
  },
  scissors: {
    rock: "computer",
    paper: "human",
    scissors: "tie",
  },
};

let humanScore = 0;
let computerScore = 0;
let roundsLeft = 10;
// let pastResultsPlayer = [];
// let pastResultsComputer = [];
setupListeners();

function setupListeners() {
  for (const choice of choices) {
    document
      .getElementById(choice)
      .addEventListener("click", () => playGame(choice));
    console.log(`Added listener for ${choice}`);
  }
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  // pastResultsComputer.push(computerChoice);
  // pastResultsPlayer.push(humanChoice);
  console.log(`Computer chose ${computerChoice}`);
  document.getElementById("computer-choice-result").innerHTML =
    "Computer chose " + computerChoice + ", you chose " + humanChoice;
  const winner = winnerTable[humanChoice][computerChoice];
  if (winner == "tie") {
    document.getElementById("result-visual").innerHTML =
      "Nobody wins, it's a tie!";
  } else {
    document.getElementById("result-visual").innerHTML = "Winner is " + winner;
  }

  console.log(`Winner was ${winner}`);
  updateValues(winner);
  updateUI(humanScore, computerScore, roundsLeft);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateValues(winner) {
  roundsLeft--;
  switch (winner) {
    case "human":
      humanScore++;
      console.log("Added to human score");
      break;
    case "computer":
      computerScore++;
      console.log("Added to computer score");
      break;
    case "tie":
      console.log("Didn't add to any score");
      break;
    default:
      console.error(`Invalid winner ${winner}`);
  }
}

function updatePastResults() {}

function updateUI(humanScore, computerScore, roundsLeft) {
  document.querySelector(".player").innerHTML = humanScore;
  document.querySelector(".computer").innerHTML = computerScore;
  document.querySelector(".rounds-left").innerHTML = roundsLeft;

  console.log("Updated UI");
}
