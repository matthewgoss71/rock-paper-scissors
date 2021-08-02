function computerPlay() {
    let possibleOutcomes = ["Rock", "Paper", "Scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

//Player inputs selection

let playerSelection = prompt('Select Rock, Paper, or Scissors!', '');

//Computer makes selection of its own

computerPlay();

//Computer compares both selections

function gamePlay(playerSelection, computerPlay()) {
    if (playerSelection === computerPlay()) {
        alert("It's a draw!");
    }   else if ((playerSelection === 'Rock' && computerPlay === 'Scissors') || (playerSelection === 'Paper' && computerPlay === 'Rock') || (playerSelection === 'Scissors' && computerPlay === 'Paper')) {
        alert("Congratulations! You have beaten the computer!");
    }   else if ((playerSelection === 'Rock' && computerPlay === 'Paper') || (playerSelection === 'Paper' && computerPlay == 'Scissors') || (playerSelection === 'Scissors' && computerPlay === 'Rock')) {
        alert("Better luck next time, the computer has defeated you!");
    }   else (playerSelection === 'null' || 'undefined') {
        alert("You have to actually try to win!");
    }
}
//Computer determines outcome
//Computer alerts player results
