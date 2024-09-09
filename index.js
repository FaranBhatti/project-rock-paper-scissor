// Global Variables to track score
let humanScore = 0;
let computerScore = 0;

/**
 * Gets the computer choice for the game Rock, Paper, Scissors
 * 
 * @returns {string} - random string of rock, paper, or scissors in lowercase
 */
function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];

    let randomChoice = Math.round((Math.random()) * (choices.length - 1));

    return choices[randomChoice]
}

/**
 * Gets the players choice for the game Rock, Paper, Scissors
 * 
 * @returns {string} - players choice of rock, paper, or scissors in lowercase
 */
function getHumanChoice() {

    do {
        let choice = prompt("Choose between Rock, Paper, or Scissors");
        var validChoice = false;

        switch (choice.toLowerCase()) {
            case ("rock"):
                validChoice = true;
                return choice.toLocaleLowerCase();
            case ("paper"):
                validChoice = true;
                return choice.toLocaleLowerCase();
            case "scissors":
                validChoice = true;
                return choice.toLocaleLowerCase();
            case "scissor":
                validChoice = true;
                return choice.toLocaleLowerCase();
            default:
                validChoice = false;
        }
    } while (validChoice == false);
}

/**
 * Gets the result of one round based off of the computers choice and the players choice
 * 
 * @returns null - increments the global score of whoever won the round
 */
function playRound(humanChoice, computerChoice) {
    // if humanChoice and computerChoice is the same do nothing
    if(humanChoice == computerChoice) {
        console.log(`You and the computer chose ${humanChoice}. This round is a draw!`);
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerChoice++;
        }
        else {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    }
    else if (humanChoice == ("scissor" || "scissors")) {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    }
    else {
        console.log("We should never enter this use case.");
        console.log(`The computer chose ${computerChoice} and the player chose ${humanChoice}`);
    }
}