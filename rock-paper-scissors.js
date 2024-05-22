// Set initial scores and round
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

// Compute rock, paper, scissors choice for the computer;
function getComputerChoice() {
    let rps = ["ROCK", "PAPER", "SCISSORS"];
    let computerRandomChoice = rps[(Math.floor(Math.random() * rps.length))];
    return computerRandomChoice;
};

function roundLogic(humanInput, computerInput) {
    // Compare user choice to computer choice;
    let roundOutcome;
    // If user choice is rock then do;
    if (humanInput.toUpperCase() === "ROCK") {
        // If computer choice is rock then ouptput "Tie Game";
        if (computerInput === "ROCK") {
            roundOutcome = "You Draw";
        }
        // Else if computer choice is scissors then output "You Win!";
        else if (computerInput === "SCISSORS") {
            roundOutcome = "You Win!"
        }
        // Else output "You Lose";
        else {
            roundOutcome = "You Lose";
        }
    }
    // Else if user choice is scissors then do;
    else if (humanInput.toUpperCase() === "SCISSORS") {
        // If computer choice is rock then output "You Lose";
        if (computerInput === "ROCK") {
            roundOutcome = "You Lose";
        }
        // Else if computer choice is scissors then output "Tie Game";
        else if (computerInput === "SCISSORS") {
            roundOutcome = "You Draw";
        }
        // Else output "You Win!";
        else {
            roundOutcome = "You Win!";
        }
    }
    // Else do;
    else {
        // If computer choice is rock then output "You Win!";
        if (computerInput === "ROCK") {
            roundOutcome = "You Win!";
        }
        // Else if computer choice is scissors then output "You Lose";
        else if (computerInput === "SCISSORS") {
            roundOutcome = "You Lose";
        }
        // Else output "Tie Game";
        else {
            roundOutcome = "You Draw";
        }
    }

    return roundOutcome;
}

function playRound(humanInput) {
    // check scores to continue or restart the game
    if (Math.max(humanScore, computerScore) < 5) {
        roundCounter++;
    }
    else {
        humanScore = 0;
        computerScore = 0;
        roundCounter = 1;
    }

    // Get computer and user choices;
    let humanChoice = humanInput;
    let computerChoice = getComputerChoice();

    // who won?
    let roundOutcome;
    roundOutcome = roundLogic(humanChoice, computerChoice);

    // score logic
    if (roundOutcome === "You Win!") {
        humanScore++;
    }
    else if (roundOutcome === "You Lose") {
        computerScore++;
    }

    return roundOutcome;
}

function printScores(humanScore, computerScore, roundCounter, roundOutcome) {

    // We need to set the white-space attribute for the linebreak to function correctly when adding textContent;
    const paraOne = document.createElement("p");
    paraOne.setAttribute('style', 'white-space: pre;');

    paraOne.textContent = "Round " + roundCounter + " Outcome: " + roundOutcome + "\r\n";
    paraOne.textContent += "Player: " + humanScore + " point, Computer: " + computerScore + " point.";
    

    div.appendChild(paraOne);
   
    if (humanScore === 5) {
        const outcome = document.createElement('h1');
        outcome.textContent = "CONGRATULATIONS! YOU WIN! YOU BEAT THE COMPUTER!";
        div.appendChild(outcome); 
    }
    else if (computerScore === 5) {
        const outcome = document.createElement('h1');
        outcome.textContent = "OH NO!! YOU LOST!! COMPUTER WORLD DOMINATION IMMINENT!!!";
        div.appendChild(outcome);
    }
}


const btns = document.querySelectorAll("button");
const div = document.querySelector("#results");

btns.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        roundOutput = playRound(button.textContent);
        printScores(humanScore, computerScore, roundCounter, roundOutput);
    });
});
