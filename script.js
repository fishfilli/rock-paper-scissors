function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];  
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors.");
    return playerChoice;
}


function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();

}