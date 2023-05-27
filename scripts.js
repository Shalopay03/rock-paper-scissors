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

function game(){
    let roundResult;
    let computerPoints=0;
    let playerPoints=0;
    for(let i=0; i<5; i++){
        roundResult=round(getComputerChoice(), getPlayerChoice());
        if (roundResult==="player"){
            console.log("Player gets a point!");
            playerPoints++;
        }
        else if (roundResult==="computer"){
            console.log("Computer gets a point!");
            computerPoints++;
        }
        else if (roundResult==="draw"){
            console.log("Draw!");
            i--;
        }
        else{
            console.log("Wrong input!");
            i--;
        }
        console.log("Score: Computer-" + computerPoints + " Player-" + playerPoints);
    }
    if(playerPoints>computerPoints) console.log("Player wins with score " + playerPoints + " - " + computerPoints);
    else console.log("Computer wins with score " + computerPoints + " - " + playerPoints);
}

game();