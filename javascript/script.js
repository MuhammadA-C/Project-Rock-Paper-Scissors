"use strict";

let computerSelection; 
let playerSelection;
let getPlayerSelection;
let result;

computerSelection = getComputerChoice();
getPlayerSelection = prompt("Enter Rock, Paper, or Scissors to play!");
playerSelection = getPlayerSelection.toLowerCase();
result = playRockPaperScissors(computerSelection, playerSelection);

if (result === "You Lose!"){
    console.log(result + " " + computerSelection + " beats " + playerSelection);
}
else if (result === "You Win!"){
    console.log(result + " " + playerSelection + " beats " + computerSelection);
} else {
    console.log(result);
}





function playRockPaperScissors(computerSelection, playerSelection){
    let computer = computerSelection.toLowerCase();
    let player = playerSelection;
    let result;

    if (computer === player){
        result = "You Tied!";
    } 
    else if (computer === "rock" && player === "scissors" || computer === "scissors" && player === "paper" || computer === "paper" && player === "rock"){
        result = "You Lose!";
    } else {
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

