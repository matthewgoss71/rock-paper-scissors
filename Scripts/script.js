function computerPlay() {
    let possibleOutcomes = ["Rock", "Paper", "Scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

//Player inputs selection

let playerSelection = prompt('Select Rock, Paper, or Scissors!', '');

//Computer makes selection of its own

let computerSelection = computerPlay();
console.log(computerSelection);

//Convert all selections to lowercase for comparison

let playerSelectionLower = playerSelection.toLowerCase();
let computerSelectionLower = computerSelection.toLowerCase();

//Computer compares both selections
//Computer determines outcome
//Computer alerts player results

function gamePlay() {
    if (playerselectionLower === computerSelectionLower) {
        alert("It's a draw!");
    }   else if ((playerselectionLower === 'Rock' &&  computerSelectionLower === 'Scissors') || (playerselectionLower === 'Paper' && computerSelectionLower === 'Rock') || (playerselectionLower === 'Scissors' && computerSelectionLower === 'Paper')) {
        alert("Congratulations! You have beaten the computer!");
    }   else if ((playerselectionLower === 'Rock' && computerSelectionLower === 'Paper') || (playerselectionLower === 'Paper' && computerSelectionLower == 'Scissors') || (playerselectionLower === 'Scissors' && computerSelectionLower === 'Rock')) {
        alert("Better luck next time, the computer has defeated you!");
    }   else {
        alert("You have to actually try to win!");
    }
}

gamePlay();

