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
    let winLose = document.querySelector('#win-lose');
    let score = document.querySelector('#score');
    const winLoseContent = document.querySelector('#win-lose-content')
    const scoreContent = document.querySelector('#score-content')

    if (playerSelection === computerSelection) {
      winLoseContent.textContent = 'It\'s a draw!';
      winLose.appendChild(winLoseContent);
      scoreContent.textContent = 'Player ' + playerScore + ' ' + 'Computer ' + 
      computerScore;
      score.appendChild(scoreContent);
    }   else if ((playerSelection === 'rock' &&  computerSelection ===
                'scissors') || (playerSelection === 'paper' && 
                computerSelection === 'rock') || (playerSelection === 
                'scissors' && computerSelection === 'paper')) {
          winLoseContent.textContent = 'You have beaten the computer!';
          winLose.appendChild(winLoseContent);
          scoreContent.textContent = 'Player ' + ++playerScore + ' ' + 
              'Computer ' + computerScore;
          score.appendChild(scoreContent);

    }   else if ((playerSelection === 'rock' && computerSelection === 
                'paper') || (playerSelection === 
                'paper' && computerSelection == 'scissors') || 
                (playerSelection === 'scissors' && 
                computerSelection === 
                'rock')) {
          winLoseContent.textContent = 'You have lost to the computer!';
          winLose.appendChild(winLoseContent);
          scoreContent.textContent = 'Player ' + playerScore + ' ' + 
              'Computer ' + ++computerScore;
          score.appendChild(scoreContent);
    }   if (playerScore === 5) {
          playerScore = 0;
          computerScore = 0;
          winLoseContent.textContent = 'Congrats! You have bested the computer '
              + 'in 5 rounds!';
          winLoseContent.appendChild(winLoseContent);
    }   if (computerScore === 5) {
          playerScore = 0;
          computerScore = 0;
          winLoseContent.textContent = 'Better luck next time! You have lost to'
              + ' the computer in 5 rounds!';
          winLoseContent.appendChild(winLoseContent);
    }
}

//c. Add a div for displaying results and change all of your console.logs into DOM methods.
//d. Display the running score, and announce a winner of the game once one player reaches 5 points.
//e. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.

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
}  
 */
//Run the game

//runGame();