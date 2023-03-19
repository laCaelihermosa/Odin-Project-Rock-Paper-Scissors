"use strict"

const usersName = prompt("Hi there! What is your name ?");

function welcome(name) {

    return `Hi ` + usersName  +  `  welcome to my rock, paper, scissors game version, here are some rules I want you to know: You must win 5 rock, paper, scissors rounds to win a game. REMEMBER,  rock beats scisorss, paper beats rock, and last scissors beats paper... Remember you are playing against a random computer algorithm `;                          
                        
}

console.log(welcome("name"));

// get computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;
}

// get player choice
function getPlayerChoice() {
  let playerInput = prompt("Please make your stand and choose between rock, paper or scissors...");
  let result = playerInput.toLowerCase();
  return result;
}

// play one round and save the score
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie replay this round";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! paper beats rock`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! rock beats scissors`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose!scissors beats paper`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! paper beats rock`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! rock beats scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! scissors beats paper`;
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
  let computerScore = 0,
    playerScore = 0;

  for (i = 0; i < 3; i++) {
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
      console.log(`computer: ${computerScore} | player: ${playerScore}`);
    } else if (result.includes("lose")) {
      computerScore++;
      console.log(`computer: ${computerScore} | player: ${playerScore}`);
    }
    console.log(
      "Final Results: Player: " + playerScore + " Computer: " + computerScore
    );
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game.");
    } else {
      console.log("The game was an overall tie.");
    }
  }
}