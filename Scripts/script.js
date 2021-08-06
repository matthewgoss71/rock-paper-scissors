//Function chooses random selection from r, p, and s

function computerPlay() {
    let possibleOutcomes = ["rock", "paper", "scissors"]
    let computerSelection = possibleOutcomes[Math.floor(Math.random()*
            possibleOutcomes.length)]
    return computerSelection;
}

//Assign variables for scoring

let playerScore = 0;
let computerScore = 0;

//Single round gameplay function
const buttons = document.querySelectorAll('button');
let playerSelection = buttons.forEach((button) => {
  let buttonID = button.addEventListener('click', () => {
    playRound(button.id);
  });
});

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        alert("It's a draw!");
    }   else if ((playerSelection === 'rock' &&  computerSelection ===
                'scissors') || (playerSelection === 'paper' && 
                computerSelection === 'rock') || (playerSelection === 
                'scissors' && computerSelection === 'paper')) {
        alert("Congratulations! You have beaten the computer!");
        console.log('Player ' + ++playerScore + ' ' + 'Computer ' + 
                computerScore);
    }   else if ((playerSelection === 'rock' && computerSelection === 
                'paper') || (playerSelection === 
                'paper' && computerSelection == 'scissors') || 
                (playerSelection === 'scissors' && 
                computerSelection === 
                'rock')) {
        alert("Better luck next time, the computer has defeated you!");
        console.log('Player ' + playerScore + ' ' + 'Computer ' + 
                ++computerScore);
    }   
}

playRound();


//Best of five function

/* function runGame() {
   while ((playerScore >= 0 && playerScore <= 5) && (computerScore >= 0 && 
            computerScore <= 5)) {
       if (playerScore === 5) {   
           alert('Congrats! You Have topped the computer in a best of five rock,'
                 + ' paper, scissors match!'); 
           break;
    }  else if (computerScore === 5) {
           alert('Better luck next time, the computer has topped you in a best' 
                 + ' of five rock, paper, scissors match!');
           break;
    }
        playRound();
   }
}  */

//Run the game

//runGame();