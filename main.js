/**
 * Rock Paper Scissors
 */

/**
 * return a pseudo random natural number between 1 and 3 (3 included)
 */
let getComputerChoice = () => 1 + Math.floor(Math.random() * 3);

/**
 * Compare player & computer choices
 * 1<2 2<3 3%3<1
 * @param {int} playerSelection: natural number between 1 and 3
 * @param {int} computerSelection: natural number between 1 and 3
 * @returns 1 if player win, -1 lose; 0 draw
 */
let result = (playerSelection, computerSelection) =>
  playerSelection === 1 || computerSelection === 1
    ? (playerSelection % 3) - (computerSelection % 3)
    : playerSelection - computerSelection;

//get Selections
const rps = ["🪨", "🧻", "✀"];
const beats = ["covers 🪨", "cuts 🧻", "crashes ✀"];

var playerScore = 0,
  computerScore = 0;

function playRound() {
  while (true) {
    var choiceIndex;
    let choice = prompt("Your choice?\t Rock, Paper, or Scissors");

    if (!choice || /^(rock|paper|scissors)$/.test(choice)) {
      choiceIndex = "rock|paper|scissors".split("|").indexOf(choice) + 1;
      break;
    } else {
      alert("Please enter a valid choice");
    }
  }

  const playerSelection = choiceIndex;
  console.log("player", playerSelection);

  const computerSelection = getComputerChoice();
  console.log("computer", computerSelection);

  let r = result(playerSelection, computerSelection);
  console.log("result :", r);

  if (r > 0) {
    playerScore++;
    console.info(
      `You win ${rps[playerSelection - 1]} ${beats[computerSelection - 1]}`
    );
  } else if (r < 0) {
    computerScore++;
    console.info(
      `You lose ${rps[computerSelection - 1]} ${beats[playerSelection - 1]}`
    );
  } else console.info("it's a draw");
}

function game(_nRounds) {
  console.clear();

  for (let i = 0; i < _nRounds; i++) {
    playRound();
  }

  let finalScore = playerScore - computerScore;
  let player = "😀";
  if (finalScore > 0) {
    player = "😎";
  } else if (finalScore < 0) {
    player = "😅";
  }
  console.info(`Final Score: ${player} ${playerScore} vs ${computerScore} 🤖`);
}

// game(3);
