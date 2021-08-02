function computerPlay() {
    let possibleOutcomes = ["Rock", "Paper", "Scissors"]
    let computerChoice = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerChoice;
}

//Player inputs selection

let playerSelection = prompt('Select Rock, Paper, or Scissors!', '');
//Computer makes selection of its own
//Computer compares both selections
//Computer determines outcome
//Computer alerts player results
//Game restarts