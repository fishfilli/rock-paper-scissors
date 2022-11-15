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
    console.log(playerSelection);
    console.log(computerSelection);
    return "You lose! Paper beats rock.";
}

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}