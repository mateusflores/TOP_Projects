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
    let phrase1 = "Rock beats scissors";
    let phrase2 = "Paper beats rock";
    let phrase3 = "Scissors beats paper";


    if (computerChoice === playerChoice) {
        console.log(`Computer => ${computerChoice}\nYou => ${playerChoice}\nTIE`);
        return 0;
    } else if (computerChoice === "rock") {
        console.log(`Computer => ${computerChoice}\nYou => ${playerChoice}`);
        winner = playerChoice === "paper" ? 2 : 1;
        winner === 2 ? console.log(phrase2) : console.log(phrase1);
        return winner;
    } else if (computerChoice === "paper") {
        console.log(`Computer => ${computerChoice}\nYou => ${playerChoice}`);
        winner = playerChoice === "scissors" ? 2 : 1;
        winner === 2 ? console.log(phrase3) : console.log(phrase2);
        return winner;
    } else if (computerChoice === "scissors") {
        console.log(`Computer => ${computerChoice}\nYou => ${playerChoice}`);
        winner = playerChoice === "rock" ? 2 : 1;
        winner === 2 ? console.log(phrase1) : console.log(phrase3);
        return winner;
    }
}

function getWinner(computerScore, playerScore) {
    if (computerScore === playerScore)
        console.log("Tie!");
    else if (computerScore > playerScore)
        console.log("Computer is the winner!");
    else 
        console.log("You are the winner!");
}

function game() {
    let playerScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const winner = playTurn(getComputerChoice(), getPlayerChoice());

        if (winner === 1)
            computerScore++;
        else if (winner === 2)
            playerScore++;

        console.log(`--- TURN ${i+1} ---\nComputer score: ${computerScore}\nYou: ${playerScore}`);
    }
    getWinner(computerScore, playerScore);
}

game();