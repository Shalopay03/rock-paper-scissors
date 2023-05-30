//returns random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//returns computer choice
function getComputerChoice(){
    const rockPaperScissors=["rock", "paper", "scissors"];
    return rockPaperScissors[getRandomInt(3)];
}

//returns winner
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

//choose all game buttons
const buttons = document.querySelectorAll(".rps-btn");

//restart button
const restart = document.querySelector('#restart');

//player score
let playerScore = 0;
const playerScoreUpdate = document.querySelector(`#player-score-number`);

//computer score
let computerScore = 0;
const computerScoreUpdate = document.querySelector(`#computer-score-number`);

//text which notifies player about round result 
const winnerText=document.querySelector("#winner-text");

//images of rock, paper or scissors which update after choice
const playerImage = document.querySelector("#player-pick");
const computerImage = document.querySelector("#computer-pick");

//event listener for game buttons
buttons.forEach(button => {
    button.addEventListener('click', event => {

        //condition for finished/unfinished game
        if(playerScore < 5 && computerScore < 5) 
        {
        
        
        let computerChoice=getComputerChoice();
        let playerChoice=event.target.id;
        result=playRound(computerChoice, playerChoice);

        if(result === "player") //player wins
        {            
            playerScore++;
            playerScoreUpdate.textContent = `SCORE - ${playerScore}`;
            winnerText.textContent = "Player gains a point!";
        }
        else if(result === "computer") // computer wins
        {            
            computerScore++;
            computerScoreUpdate.textContent = `SCORE - ${computerScore}`;
            winnerText.textContent = "Computer gains a point!";
        }
        else //draw or other
        {
            winnerText.textContent = "It's a draw!";
        }

        //sets images for chosen weapon
        playerImage.setAttribute('src', `images/${playerChoice}.png`);
        computerImage.setAttribute('src', `images/${computerChoice}.png`);

        //notification about winner
        if (playerScore >= 5) winnerText.textContent = "You won!";
        if (computerScore >= 5) winnerText.textContent = "Computer won!";

        }
        });
    });

    //event listener for restart button that nullifies scores
    restart.addEventListener('click', event => {

        playerScore=0;
        playerScoreUpdate.textContent = `SCORE - ${playerScore}`;

        computerScore=0;
        computerScoreUpdate.textContent = `SCORE - ${computerScore}`;

        //resets weapon choice images
        playerImage.setAttribute('src', `images/begginning.png`);
        computerImage.setAttribute('src', `images/begginning.png`);

        winnerText.textContent = "Restart! Pick a weapon!";
    })