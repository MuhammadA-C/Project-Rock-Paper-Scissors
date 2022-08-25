



let computerChoice = getComputerChoice();



function getComputerChoice(){
    let randomInt = getRandomInt();
    let result = getRockPaperOrScissors(randomInt);

    return result;
}
//Generates a random int between 0 to 3.
function getRandomInt(){
    const max = 3;
    let result;

    result = Math.floor(Math.random() * max);

    return result;
}
/*
    Takes a number argument (num), in this case uses the randomInt funciton,
    and outputs "Rock, Paper, or Scissors" based on the conditional.
*/
function getRockPaperOrScissors(num){
    let result;

    if (num == 0) {
        result = "Rock";
    } 
    else if (num == 1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result;
}

