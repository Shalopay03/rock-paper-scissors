function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    const rockPaperScissors=["rock", "paper", "scissors"];
    return rockPaperScissors[getRandomInt(3)];
}

function getPlayerChoice(){
     return prompt("Enter your choice:").toLowerCase();
}

function round(computerChoice, playerChoice){
    console.log("Computer: " + computerChoice);
    console.log("Player: " + playerChoice);
    if(computerChoice===playerChoice)
    {
        return "Draw!";
    }
    else if (computerChoice==="rock" && playerChoice==="paper")
    {
        return "Player wins!";
    }
    else if (computerChoice==="rock" && playerChoice==="scissors")
    {
        return "Computer wins!";
    }
    else if (computerChoice==="paper" && playerChoice==="rock")
    {
        return "Computer wins!";
    }
    else if (computerChoice==="paper" && playerChoice==="scissors")
    {
        return "Player wins!";
    }
    else if (computerChoice==="scissors" && playerChoice==="rock")
    {
        return "Player wins!";
    }
    else if (computerChoice==="scissors" && playerChoice==="paper")
    {
        return "Computer wins!";
    }
    else{
        return "Invalid input! Try again!";
    }
}

console.log(round(getComputerChoice(), getPlayerChoice()));