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

    computerSelection = getComputerChoice();

    
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



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const refresh = document.querySelector("#refresh");

// sets variables for buttons

const roundDiv = document.querySelector(".round");
const counterDiv = document.querySelector(".counter");
const playedDiv = document.querySelector(".played");
const winDiv = document.querySelector(".wl");

// sets variables for divs



counterDiv.textContent = `You have won ${counter} times!`;
playedDiv.textContent = `You have played ${roundsPlayed} times!`;



var roundsPlayed = 0;

function winCon() {
    if (roundsPlayed === 5) {
        
        if (counter >= 3) {
            winDiv.textContent = `You have won ${counter} times out of 5, making you the victor`;
        } else {
            winDiv.textContent = `You have only won ${counter} times out of 5, which makes you a loser`;
        }
        rock.remove();
        paper.remove();
        scissors.remove();
        counterDiv.remove();
        playedDiv.remove();
    }
}

function rockChoice() {
    ++roundsPlayed;
    roundDiv.textContent= rps("rock");
    counterDiv.textContent = `You have won ${counter} times!`;
    playedDiv.textContent = `You have played ${roundsPlayed} times!`;
    winCon();
}

function paperChoice() {
    ++roundsPlayed;
    roundDiv.textContent= rps("paper");
    counterDiv.textContent = `You have won ${counter} times!`;
    playedDiv.textContent = `You have played ${roundsPlayed} times!`;
    winCon();
}

function scissorsChoice() {
    ++roundsPlayed;
    roundDiv.textContent= rps("scissors");
    counterDiv.textContent = `You have won ${counter} times!`;
    playedDiv.textContent = `You have played ${roundsPlayed} times!`;
    winCon();
}

rock.addEventListener("click", rockChoice)

paper.addEventListener("click", paperChoice)

scissors.addEventListener("click", scissorsChoice)

refresh.addEventListener("click", function(){
    window.location.reload();
})





// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(rps());
//         console.log(counter);
//     }
// };

