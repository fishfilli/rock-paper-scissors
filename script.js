function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];  
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log("start of playround");
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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    let playerChoice = 'rock';
    playRound(playerChoice, getComputerChoice());
});

paper.addEventListener('click', () => {
    let playerChoice = 'paper';
    playRound(playerChoice, getComputerChoice());
});

scissors.addEventListener('click', () => {
    let playerChoice = 'scissors';
    playRound(playerChoice, getComputerChoice());
});