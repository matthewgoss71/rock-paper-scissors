//Function chooses random selection from r, p, and s

function computerPlay() {
    let possibleOutcomes = ["rock", "paper", "scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerSelection;
}

//Assign variables for scoring

let playerScore = 0;
let computerScore = 0;

//Single round gameplay function

function playRound() {

    let playerSelection = prompt('Select rock, paper, or scissors!', '');
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelectionLower === computerSelection) {
        alert("It's a draw!");
    }   else if ((playerSelectionLower === 'rock' &&  computerSelection === 'scissors') || (playerSelectionLower === 
            'paper' && computerSelection === 'rock') || (playerSelectionLower === 'scissors' && computerSelection === 
            'paper')) {
        alert("Congratulations! You have beaten the computer!");
        console.log('Player ' + ++playerScore + ' ' + 'Computer ' + computerScore);
    }   else if ((playerSelectionLower === 'rock' && computerSelection === 'paper') || (playerSelectionLower === 
            'paper' && computerSelection == 'scissors') || (playerSelectionLower === 'scissors' && computerSelection === 
            'rock')) {
        alert("Better luck next time, the computer has defeated you!");
        console.log('Player ' + playerScore + ' ' + 'Computer ' + ++computerScore);
    }   else {
        alert("Quitting already? Don't give up just yet!");
    }
}

//Best of five function

function game() {
   while ((playerScore >= 0 && playerScore <= 5) && (computerScore >= 0 && computerScore <= 5)) {
       if (playerScore === 5) {   
           alert('Congrats! You Have topped the computer in a best of five rock, paper, scissors match!');
           break;
    }  else if (computerScore === 5) {
           alert('Better luck next time, the computer has topped you in a best of five rock, paper, scissors match!');
           break;
    }
        playRound();
   }
} 

//Run the game

game();

