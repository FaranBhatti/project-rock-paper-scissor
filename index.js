/**
 * Gets the computer choice for the game Rock, Paper, Scissors
 * @returns {string} - random string of rock, paper, or scissors
 */
function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];

    let randomChoice = Math.round((Math.random()) * (choices.length - 1));

    return choices[randomChoice]
}