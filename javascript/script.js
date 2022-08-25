"use strict";

let computerSelection; 
let numofRounds = 5;
let playerSelection;
let isPlayerSelectionValid;

computerSelection = getComputerChoice();
playerSelection = getPlayerSelection();
isPlayerSelectionValid = PlayerSelectionValid();
game(numofRounds, computerSelection, isPlayerSelectionValid);




function game(numofRounds, computerSelection, isPlayerSelectionValid){
    for (let i = 0; i < numofRounds; i++){
        let result = playRound(computerSelection, playerSelection);

        if (isPlayerSelectionValid === false){
            errorMessageInvalidInput();
        }
        else if (result === "You Win!"){
            console.log(result + " " + playerSelection + " beats " + computerSelection);
        } 
        else if (result === "You Lose!"){
            console.log(result + " " + computerSelection + " beats " + playerSelection);
        }
        else {
            console.log(result);
        }
    }
}
//Plays a single round of Rock, Paper, Scissors
function playRound(computerSelection, playerSelection, isPlayerSelectionValid){
    let computer = computerSelection.toLowerCase();
    let player = playerSelection;
    let result;

    if (isPlayerSelectionValid === false){
        errorMessageInvalidInput();
    }
    else if (computer == player){
        result = "You Tied!";
    } 
    else if (computer == "rock" && player == "scissors" || computer == "scissors" && player == "paper" || computer == "paper" && player == "rock"){
        result = "You Lose!";
    } 
    else {
        result = "You Win!";
    }

    return result;
}
//Gets computers choice
function getComputerChoice(){
    let randomInt = getRandomInt();
    let result = getRockPaperScissors(randomInt);

    return result;
}
//Generates a random int between 0 to 3.
function getRandomInt(){
    const max = 3;
    let result = Math.floor(Math.random() * max);

    return result;
}
/*
    Takes a number argument (num), in this case uses the randomInt funciton,
    and outputs "Rock, Paper, or Scissors" based on the conditional.
*/
function getRockPaperScissors(num){
    let result;

    if (num == 0) {
        result = "rock";
    } 
    else if (num == 1) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
}
//Prompts player for input
function getPlayerSelection(){
    let getPlayerSelection;
    let playerSelection;

    getPlayerSelection = prompt("Enter Rock, Paper, or Scissors to play!");
    playerSelection = getPlayerSelection.toLowerCase(); 

    return playerSelection;
}
//Checks to see if player selection is valid
function PlayerSelectionValid(playerSelection){
    let isInputCorrect = true;

    if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors"){
        isInputCorrect = false;
    } 
    return isInputCorrect;
}
//Displays error message for invalid input on the console
function errorMessageInvalidInput(){
    console.log("Error! You typed in: " + playerSelection + ", that's incorrect.");
}
