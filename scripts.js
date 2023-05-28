function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    const rockPaperScissors=["rock", "paper", "scissors"];
    return rockPaperScissors[getRandomInt(3)];
}

/*function getPlayerChoice(){
     return prompt("Enter your choice:").toLowerCase();
}*/

function playRound(computerChoice, playerChoice){
    console.log("Computer: " + computerChoice);
    console.log("Player: " + playerChoice);
    if(computerChoice===playerChoice)
    {
        return "draw";
    }
    else if (computerChoice==="rock" && playerChoice==="paper")
    {
        return "player";
    }
    else if (computerChoice==="rock" && playerChoice==="scissors")
    {
        return "computer";
    }
    else if (computerChoice==="paper" && playerChoice==="rock")
    {
        return "computer";
    }
    else if (computerChoice==="paper" && playerChoice==="scissors")
    {
        return "player";
    }
    else if (computerChoice==="scissors" && playerChoice==="rock")
    {
        return "player";
    }
    else if (computerChoice==="scissors" && playerChoice==="paper")
    {
        return "computer";
    }
    else{
        return "invalid";
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', event => {
            alert(playRound(getComputerChoice(), event.target.id));
        });
    });
