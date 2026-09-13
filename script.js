// Get input choice from computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    return computerChoice === 1 ? "rock" :
    computerChoice === 2 ? "paper" :
    computerChoice === 3 ? "scissors" : undefined;
}

// Get input choice from user
function getHumanChoice() {
    return humanChoice = prompt("Enter your choice (rock/paper/scissors): ", "");
}

// Write a function to play a single game of 5 rounds
function playGame() {
    // Initialize score variable for human and computer
    let humanScore = 0;
    let computerScore = 0;

    // Write a function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou lose! Paper beats rock.");
            } else if (computerChoice === "scissors") {
                humanScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou win! Rock beats scissors.");
            } else {
                return console.log("Computer picked " + computerChoice + "!\nNo one wins, it's a tie!");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou lose! Scissors beats paper.");
            } else if (computerChoice === "rock") {
                humanScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou win! Paper beats rock.");
            } else {
                return console.log("Computer picked " + computerChoice + "!\nNo one wins, it's a tie!");
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou lose! Rock beats scissors.");
            } else if (computerChoice === "paper") {
                humanScore += 1;
                return console.log("Computer picked " + computerChoice + "!\nYou win! Scissors beats paper.");
            } else {
                return console.log("Computer picked " + computerChoice + "!\nNo one wins, it's a tie!");
            }
        }
    }

    // Set a counter and loop the game 5 times
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null){
            i += 5;
            console.log("The game is cancelled!\nRefresh the page to play again.");
        } else {
            playRound(humanSelection, computerSelection);
        }
    }

    // Compare user and computer score and declare the winner or tie
    if (humanScore > computerScore) {
        console.log("Your total score is " + humanScore + ".\nThe computer's score is " + computerScore + ".\nYou are the winner!");
    } else if (humanScore < computerScore) {
        console.log("Your total score is " + humanScore + ".\nThe computer's score is " + computerScore + ".\nYou are the loser!");
    } else {
        console.log("Your total score is " + humanScore + ".\nThe computer's score is " + computerScore + ".\nIt's a tie!");
    }
}

// Invoke the function to play the entire game of 5 rounds
playGame();