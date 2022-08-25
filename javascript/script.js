"use strict";

let computerSelection; 
const numOfRounds = 5;

computerSelection = getComputerChoice();
game(numOfRounds, computerSelection);



function game(numOfRounds, computerSelection){
    let ties = 0;
    let wins = 0;
    let loses = 0;

    for(let i = 0; i < numOfRounds; i++){
        let playerSelection = getPlayerSelection();
        let result = playRound(computerSelection, playerSelection);

        console.log(result); //prints out the results for each round

        if (result === "You Lose! Rock beats Scissors." || result === "You Lose! Scissors beats Paper." || result === "You Lose! Paper beats Rock."){
            loses++;
        }
        else if (result === "You Win! Rock beats Paper." || result === "You Win! Scissors beats Paper." || result === "You Win! Paper beats Rock."){
            wins++;
        }
        else {
            ties++;
        }
    }

    whoWonTheGame(wins, loses);   
}

//Plays a single round of Rock, Paper, Scissors
function playRound(computerSelection, playerSelection){
    let computer = computerSelection.toLowerCase();
    let player = playerSelection;
    let result = "You Tied with the computer!";

    if (computer === "rock" && player === "scissors"){
        result = "You Lose! Rock beats Scissors.";
        return result;
    } 
    else if (computer === "scissors" && player === "paper"){
        result =  "You Lose! Scissors beats Paper.";
        return result;
    }
    else if (computer === "paper" && player === "rock"){
        result = "You Lose! Paper beats Rock.";
        return result;
    }
    else if (player === "rock" && computer === "scissors"){
        result =  "You Win! Rock beats Paper.";
        return result;
    }
    else if (player === "scissors" && computer === "paper"){
        result = "You Win! Scissors beats Paper.";
        return result;
    }
    else if (player === "paper" && computer === "rock"){
        result = "You Win! Paper beats Rock.";
        return result;
    }
    else {
        return result;
    }

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
//Checks to see who won
function whoWonTheGame(wins, loses){
    if (wins > loses){
        console.log("You Win!");
    }
    else if (wins < loses){
        console.log("You Lose!");
    } 
    else {
        console.log("You Tied!");
    }
}