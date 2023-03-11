function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function getComputerChoice() {
    
    const outcomes = ["Rock", "Paper", "Scissors"];

    return getRandomItem(outcomes);    
};

let counter = 0

function rps(playerSelection, computerSelection) {

    computerSelection = getComputerChoice()

    playerSelection = prompt("Enter \"Rock\", \"Paper\", or \"Scissors!\"", "Rock");

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {

        counter = ++counter;

        return "You Win! Rock beats Scissors";

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {

        return"You Lose! Paper beats Rock";

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {

        return"Draw! Rock and Rock makes Oogabooga happy";
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {

        return "You Lose! Get cut up";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {

        return"Draw! Paper squared is origami";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {

        counter = ++counter;

        return"You Win! Paper Beats rock";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {

        return"Draw! Stop scissoring please";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {

        counter = ++counter;

        return"You Win! Real samurai we got here";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {

        return "You Lose! Technology cannot save you this time";
    } else {
        return "You have entered an invalid choice!"
    }
};



function game() {
    for (let i = 0; i < 5; i++) {
        console.log(rps());
        console.log(counter);
    }
};

game();