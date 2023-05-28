function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    const rockPaperScissors=["rock", "paper", "scissors"];
    return rockPaperScissors[getRandomInt(3)];
}

function playRound(computerChoice, playerChoice){
    if (computerChoice==="rock" && playerChoice==="paper")
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
    else
    {
        return "draw";
    }

}

function givePointTo(whoGainsPoint){
    const score = document.querySelector(`#${whoGainsPoint}-score-number`);
    console.log(score);
    score.textContent = "SCORE - 1";
}

const buttons = document.querySelectorAll("button");

let playerScore = 0;
const playerScoreUpdate = document.querySelector(`#player-score-number`);

let computerScore = 0;
const computerScoreUpdate = document.querySelector(`#computer-score-number`);

const winnerText=document.querySelector("#winner-text");

const playerImage = document.querySelector("#player-pick");
const computerImage = document.querySelector("#computer-pick");

const controller = new AbortController();

    buttons.forEach(button => {
    button.addEventListener('click', event => {
        let computerChoice=getComputerChoice();
        let playerChoice=event.target.id;
        result=playRound(computerChoice, playerChoice);
        if(result === "player")
        {            
            playerScore++;
            playerScoreUpdate.textContent = `SCORE - ${playerScore}`;
            winnerText.textContent = "Player gains a point!";
        }
        else if(result === "computer")
        {            
            computerScore++;
            computerScoreUpdate.textContent = `SCORE - ${computerScore}`;
            winnerText.textContent = "Computer gains a point!";
        }
        else
        {
            winnerText.textContent = "It's a draw!";
        }

        
        playerImage.setAttribute('src', `images/${playerChoice}.png`);
        computerImage.setAttribute('src', `images/${computerChoice}.png`);

        if (playerScore >= 5) {
            winnerText.textContent = "You won!";
            controller.abort()
        }

        if (computerScore >= 5) {
            winnerText.textContent = "Computer won!";
            controller.abort()
        }
        
        }, {signal: controller.signal});
    });