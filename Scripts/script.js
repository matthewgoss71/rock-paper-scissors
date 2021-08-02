function computerPlay() {
    let possibleOutcomes = ["Rock", "Paper", "Scissors"]
    let computerChoice = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    return computerChoice;
}