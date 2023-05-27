function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    const rockPaperScissors=["Rock", "Paper", "Scissors"];
    return rockPaperScissors[getRandomInt(3)];
}

console.log(getComputerChoice());