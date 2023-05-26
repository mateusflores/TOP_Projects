function getComputerChoice() {
    let choicesArray = ["rock", "paper", "scissors"];
    let indexNumeber = Math.floor((Math.random() * 10) % 3);
    return choicesArray[indexNumeber];
}

function getPlayerChoice() {
    let flag = true;
    while (flag){
        let playerChoice = prompt("Choose between rock, paper or scissor!");
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            flag = false;
            return playerChoice;
        } else
            alert("ERROR: You should choose one of the options.\nTry again.");
    }
}

// Return 0 if they tie; 1 if computer wins; 2 if player wins
function playTurn(computerChoice, playerChoice) {
    if (computerChoice === playerChoice)
        return 0;
    else if (computerChoice === "rock") 
        return playerChoice === "paper" ? 2 : 1;
    else if (computerChoice === "paper")
        return playerChoice === "scissors" ? 2 : 1;
    else if (computerChoice === "scissors")
        return playerChoice === "rock" ? 2 : 1;
    
}

console.log(playTurn("paper", "scissors"));