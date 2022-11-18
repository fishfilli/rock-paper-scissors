function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];  
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors.");
    return playerChoice;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `${playerSelection} against ${computerSelection}. It's a draw.`;
    } else if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
                ((playerSelection === "paper") && (computerSelection === "rock")) ||
                ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        return `${playerSelection} against ${computerSelection}. You win.`;
    } else {
        return `${playerSelection} against ${computerSelection}. You lose.`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {

    }
}