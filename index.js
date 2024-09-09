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
                return choice;
            case ("paper"):
                validChoice = true;
                return choice;
            case ("scissors" || "scissor"):
                validChoice = true;
                return choice;
            default:
                validChoice = false;
        }
    } while (validChoice == false);
}