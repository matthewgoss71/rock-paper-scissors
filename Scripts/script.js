function computerPlay() {
    let possibleOutcomes = ["rock", "paper", "scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

let x = 0;
let y = 0;

function playRound() {

    let playerSelection = prompt('Select rock, paper, or scissors!', '');
    let playerSelectionLower = playerSelection.toLowerCase();
    //console.log('Player chooses ' + playerSelectionLower);
    let computerSelection = computerPlay();
    //console.log('Computer chooses ' + computerSelection);

    if (playerSelectionLower === computerSelection) {
        alert("It's a draw!");
        return (x + 0);
    }   else if ((playerSelectionLower === 'rock' &&  computerSelection === 'scissors') || (playerSelectionLower === 'paper' && computerSelection === 'rock') || (playerSelectionLower === 'scissors' && computerSelection === 'paper')) {
        alert("Congratulations! You have beaten the computer!");
        console.log('Player ' + ++x + ' ' + 'Computer ' + y);
        return (x);
    }   else if ((playerSelectionLower === 'rock' && computerSelection === 'paper') || (playerSelectionLower === 'paper' && computerSelection == 'scissors') || (playerSelectionLower === 'scissors' && computerSelection === 'rock')) {
        alert("Better luck next time, the computer has defeated you!");
        console.log('Player ' + x + ' ' + 'Computer ' + ++y);
        return (y);
    }   else {
        alert("You have to actually try to win!");
        return (y + 0);
    }
}

function game() {
   while ((x >= 0 && x <= 5) && (y >= 0 && y <= 5)) {
       if (x === 5) {   
           alert('Congrats! You Have topped the computer in a best of five rock, paper, scissors match!');
           break;
    }  else if (y === 5) {
           alert('Better luck next time, the computer has topped you in a best of five rock, paper, scissors match!');
           break;
    }
        playRound();
   }
} 

game();

