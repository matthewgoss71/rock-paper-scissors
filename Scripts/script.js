function computerPlay() {
    let possibleOutcomes = ["rock", "paper", "scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

function playRound() {

    let playerSelection = prompt('Select rock, paper, or scissors!', '');
    let playerSelectionLower = playerSelection.toLowerCase();
    //console.log('Player chooses ' + playerSelectionLower);
    let computerSelection = computerPlay();
    //console.log('Computer chooses ' + computerSelection);
    let x = 0;
    let y = 0;

    if (playerSelectionLower === computerSelection) {
        alert("It's a draw!");
    }   else if ((playerSelectionLower === 'rock' &&  computerSelection === 'scissors') || (playerSelectionLower === 'paper' && computerSelection === 'rock') || (playerSelectionLower === 'scissors' && computerSelection === 'paper')) {
        alert("Congratulations! You have beaten the computer!");
        console.log('Player ' + ++x);
    }   else if ((playerSelectionLower === 'rock' && computerSelection === 'paper') || (playerSelectionLower === 'paper' && computerSelection == 'scissors') || (playerSelectionLower === 'scissors' && computerSelection === 'rock')) {
        alert("Better luck next time, the computer has defeated you!");
        console.log('Computer ' + ++y);
    }   else {
        alert("You have to actually try to win!");
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

game();

