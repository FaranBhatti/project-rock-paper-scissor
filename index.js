// Select the score div
let resultDiv = document.querySelector('#results');

// keeping track of score
let playerScore = 0;
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
function getHumanChoice(choice) {

    do {
        // let choice = prompt("Choose between Rock, Paper, or Scissors").toLowerCase();
        // var validChoice = false;

        switch (choice) {
            case ("rock"):
                return choice;
            case ("paper"):
                return choice;
            case ("scissor"):
                return choice;
            default:
                validChoice = false;
        }
    } while (validChoice == false);
}

/**
 * Gets the result of one round based off of the computers choice and the players choice
 * 
 * @returns {gameResult} - Numerical return where 0 returned on player loss, 1 returned on player win, 2 returned on tie, 3 if we enter unknown state
 */
function playRound(humanChoice, computerChoice) {
    
    let gameResult = 0;

    switch (humanChoice) {
        case computerChoice:
            {
                console.log(`You and the computer chose ${humanChoice}. This round is a draw!`);
                gameResult = 2;
                break;
            }
        case "rock":
            {
                if (computerChoice == "paper") {
                    console.log("You lose! Paper beats Rock.");
                }
                else {
                    console.log("You win! Rock beats scissors.");
                    gameResult = 1;
                }
                break;
            }
        case "paper":
            {
                if (computerChoice == "rock") {
                    console.log("You win! Paper beats rock.");
                    gameResult = 1;
                }
                else {
                    console.log("You lose! Scissors beats paper.");
                }
                break;
            }
        case "scissor":
            {
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beats scissors.");
                }
                else {
                    console.log("You win! Scissors beats paper.");
                    gameResult = 1;
                }
                break;
            }
        case "scissors":
            {
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beats scissors.");
                }
                else {
                    console.log("You win! Scissors beats paper.");
                    gameResult = 1;
                }
                break;
            }
        default:
            {
                console.log("We should never enter this use case.");
                console.log(`The computer chose ${computerChoice} and the player chose ${humanChoice}`);
                gameResult = 3;
            }
    }

    return gameResult;
}

function updateResult(roundResult) {

    switch (roundResult) {
        case 0:
            // computer wins
            computerScore++;
            resultDiv.textContent = 'Computer Score: ' + computerScore + '  |  Player Score: ' + playerScore;
            break;
        case 1:
            // human wins
            playerScore++;
            resultDiv.textContent = 'Computer Score: ' + computerScore + '  |  Player Score: ' + playerScore;

            break;
        case 2:
            // neither win
            resultDiv.textContent = 'Computer Score: ' + computerScore + '  |  Player Score: ' + playerScore;

            break;
        case 3:
            // error in playRound func
            resultDiv.textContent = 'Error in the updateResult function.'
            break;
    }
}

// /**
//  * Plays the game rock, paper, scissors. Highest score after 5 rounds is the winner
//  */
// function playGame() {
//     // Keeping track of the score
//     let playerScore = 0;
//     let computerScore = 0;

//     if (confirm("Welcome to Rock, Paper, Scissors. Ready to play?")) {
        
//         let roundResult = 0;

//         for (let i = 1; i < 6; i++) {

//             let playerSelection = getHumanChoice();
//             let computerSelection = getComputerChoice();

//             roundResult = playRound(playerSelection, computerSelection);
//             console.log(`The round result is ${roundResult}.`)

            // switch (roundResult) {
            //     case 0:
            //         {
            //             console.log(`COMPUTER WINS ROUND ${i}.`)
            //             computerScore++;
            //             break;
            //         }
            //     case 1:
            //         {
            //             console.log(`PLAYER WINS ROUND ${i}.`)
            //             playerScore++;
            //             break;
            //         }
            //     case 2:
            //         {
            //             console.log(`NEITHER WINS ROUND ${i}.`);
            //             break;
            //         }
            //     case 3:
            //         {
            //             console.log("Error in playRound function. We entered an unknown state.");
            //             console.log(`roundResult in switch case 3: ${roundResult}`);
            //             break;
            //         }
            //     default:
            //         {
            //             console.log("Error in playGame function. We enterted an unknown state.");
            //             console.log(`roundResult in switch default: ${roundResult}`);
            //             break;
            //         }
            // }
//         }

//         if (playerScore > computerScore) {
//             console.log(`You won the overall game. You won ${playerScore} rounds and the computer won ${computerScore} rounds.`);
//         }
//         else if (playerScore < computerScore) {
//             console.log(`You lost the overall game. You won ${playerScore} rounds and the computer won ${computerScore} rounds.`);
//         }
//         else {
//             console.log("Wow it looks like you both tied!");
//         }
        
//     } else {
//         console.log("User clicked cancel");
//     }

// }


function playGame() {
    if (confirm("Welcome to Rock, Paper, Scissors. Ready to play?")) {

        let buttons = document.querySelectorAll('#rps-buttons button');

        let roundResult = 0;

        // Attach a click event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (playerScore !== 5 || computerScore !== 5) {  // Stop after one player reaches 5
                    let clickedButton = e.target.id;

                    // Switch statement based on the button clicked
                    switch (clickedButton) {
                        case 'rock':
                            roundResult = playRound("rock", getComputerChoice());
                            break;
                        case 'paper':
                            roundResult = playRound("paper", getComputerChoice());
                            break;
                        case 'scissor':
                            roundResult = playRound("scissor", getComputerChoice());
                            break;
                        default:
                            console.log('Invalid selection');
                    }

                    updateResult(roundResult);

                    // If 5 rounds are completed, disable the buttons
                    if (playerScore === 5 || computerScore === 5) {
                        buttons.forEach(button => {
                            button.disabled = true;  // Disable each button
                        });
                        console.log('Game over!');
                    }
                }
            });
        });
    } else {
        console.log('User clicked cancel.');
    }
}

playGame();