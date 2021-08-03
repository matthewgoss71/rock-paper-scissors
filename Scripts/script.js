function computerPlay() {
    let possibleOutcomes = ["rock", "paper", "scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

//Player inputs selection

let playerSelection = prompt('Select rock, paper, or scissors!', '');

//Computer makes selection of its own

let computerSelection = computerPlay();
console.log('Computer chooses ' + computerSelection);

//Convert all selections to lowercase for comparison

let playerSelectionLower = playerSelection.toLowerCase();
console.log('Player chooses ' + playerSelectionLower);

//Computer compares both selections
//Computer determines outcome
//Computer alerts player results

function gamePlay() {
    if (playerSelectionLower === computerSelection) {
        alert("It's a draw!");
    }   else if ((playerSelectionLower === 'rock' &&  computerSelection === 'scissors') || (playerSelectionLower === 'paper' && computerSelection === 'rock') || (playerSelectionLower === 'scissors' && computerSelection === 'paper')) {
        alert("Congratulations! You have beaten the computer!");
    }   else if ((playerSelectionLower === 'rock' && computerSelection === 'paper') || (playerSelectionLower === 'paper' && computerSelection == 'scissors') || (playerSelectionLower === 'scissors' && computerSelection === 'rock')) {
        alert("Better luck next time, the computer has defeated you!");
    }   else {
        alert("You have to actually try to win!");
    }
}

gamePlay();

