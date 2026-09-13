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

// Initialize score variable for human and computer

// Write a function to play a single round

// Write a function to play a single game of 5 rounds