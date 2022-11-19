function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];  
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        announcement.textContent = `${playerSelection} against ${computerSelection}. It's a draw.`;
    } else if (((playerSelection === "rock") && (computerSelection === "scissors")) || 
                ((playerSelection === "paper") && (computerSelection === "rock")) ||
                ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        playerScore++;            
        announcement.textContent = `${playerSelection} against ${computerSelection}. You win.`;
        playerScoreCard.textContent = `Player: ${playerScore}`;
    } else {
        computerScore++;
        announcement.textContent = `${playerSelection} against ${computerSelection}. You lose.`;
        computerScoreCard.textContent = `Computer: ${computerScore}`;
    }
}

function checkWinner() {
    if (playerScore === 5) {
        announcement.textContent = 'YOU ARE VICTORIOUS!';
        body.removeChild(buttonContainer);
    } else if (computerScore === 5) {
        announcement.textContent = 'YOU SUFFER DEFEAT!';
        body.removeChild(buttonContainer);
    }
}
const body = document.querySelector('body');
const buttonContainer = document.querySelector('#button-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    let playerChoice = 'rock';
    playRound(playerChoice, getComputerChoice());
    checkWinner();
});

paper.addEventListener('click', () => {
    let playerChoice = 'paper';
    playRound(playerChoice, getComputerChoice());
    checkWinner();
});

scissors.addEventListener('click', () => {
    let playerChoice = 'scissors';
    playRound(playerChoice, getComputerChoice());
    checkWinner();
});

const playerScoreCard = document.querySelector('#playerScoreCard');
const computerScoreCard = document.querySelector('#computerScoreCard');
const announcement = document.querySelector('#announcement');

let playerScore = 0;
let computerScore = 0;