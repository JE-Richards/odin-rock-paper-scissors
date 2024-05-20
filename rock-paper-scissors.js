// Initiate the game;
function playGame() {
// Set player score to 0;
    let humanScore = 0;

    // Set computer score to 0;
    let computerScore = 0;

    // Set round counter to 1;
    let roundCounter = 1;

    // While round counter is less than or equal to 5, play game;
    while (roundCounter <= 5) {
        // Prompt user to choose rock, paper, or scissors;
        function getHumanChoice() {
            let humanInput = prompt("Type either rock, paper, or scissors: ");
            // Check if the user input is one of the three options we want, if true return input;
            if ((humanInput.toUpperCase() === "ROCK") || (humanInput.toUpperCase() === "PAPER") || (humanInput.toUpperCase() === "SCISSORS")) {
                return humanInput;
            }
            // else throw an alert and re-ask for input via recursion;
            else {
                alert("Input incorrect, please only type either rock, paper, or scissors");
                return getHumanChoice();
            }
        }

        // Compute rock, paper, scissors choice for the computer;
        function getComputerChoice() {
            let rps = ["ROCK", "PAPER", "SCISSORS"];
            let computerRandomChoice = rps[(Math.floor(Math.random() * rps.length))];
            return computerRandomChoice
        }

        // Get computer and user choices;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // Compare user choice to computer choice;
        let roundOutcome;
            // If user choice is rock then do;
            if (humanChoice.toUpperCase() === "ROCK") {
                // If computer choice is rock then ouptput "Tie Game";
                if (computerChoice === "ROCK") {
                    roundOutcome = "You Draw";
                }
                // Else if computer choice is scissors then output "You Win!";
                else if (computerChoice === "SCISSORS") {
                    roundOutcome = "You Win!"
                }
                // Else output "You Lose";
                else {
                    roundOutcome = "You Lose";
                }
            }
            // Else if user choice is scissors then do;
            else if (humanChoice.toUpperCase() === "SCISSORS") {
                // If computer choice is rock then output "You Lose";
                if (computerChoice === "ROCK") {
                    roundOutcome = "You Lose";
                }
                // Else if computer choice is scissors then output "Tie Game";
                else if (computerChoice === "SCISSORS") {
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
                if (computerChoice === "ROCK") {
                    roundOutcome = "You Win!";
                }
                // Else if computer choice is scissors then output "You Lose";
                else if (computerChoice === "SCISSORS") {
                    roundOutcome = "You Lose";
                }
                // Else output "Tie Game";
                else {
                    roundOutcome = "You Draw";
                }
            }
        
        // Print the output to the console;
        console.log("Round " + roundCounter + " Outcome: " + roundOutcome);

        // Incrementally increase winners score;
            // If winner result is "You Win!" increment score by 1;
            if (roundOutcome === "You Win!") {
                humanScore++;
            }
            else if (roundOutcome === "You Lose") {
                computerScore++;
            }
            // Else no score change;
        
        // Print players scores to console;
        console.log("User: " + humanScore + " - " + computerScore + " :Computer");

        // Increment round counter by 1;
        roundCounter++;

        // If round counter less than or equal to 5, print round counter;
        if (roundCounter <= 5) {
            console.log("Round " + roundCounter + " start!");
        }
        // If round counter is equal to 6 compare player scores
        // Print overall winner to console
        else if (roundCounter === 6) {
            if (humanScore > computerScore) {
                console.log("You Won the Game!!!");
            }
            else if (humanScore < computerScore) {
                console.log("You Lost the Game :(");
            }
            else {
                console.log("The game was a Draw!");
            }
        }
    // End while loop
    }
}