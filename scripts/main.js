// Rules popup
let btn = document.getElementById("rul-btn");
let popup = document.getElementById("rules-pupup");
let close = document.getElementById("close");

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
})

var scoreText = document.getElementById("scoreText");
var score = window.localStorage.getItem("score");

window.onload = () => {
  console.log(score);
  console.log(score);
  if (score === null) {
    window.localStorage.setItem("score", 0);
  } else {
    scoreText.innerHTML = score;
  }
}

// The Game code
let availableChoices = ["paper", "rock", "scissors"];
let choicesContainer = document.getElementsByClassName("tree-choices");
var choices = choicesContainer[0].children;

//console.log(choices);

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", (e) => {
    const playerChoice = e.target.id;

    const makeChoice = (playerChoice) => {
      //console.log("the clicked item is " + playerChoice);

      // * make a random choice from the available choices
      let computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];

      // * check if the player and computer chose the same thing
      if (computerChoice !== playerChoice) {
        //console.log("the computer choise is " + computerChoice);
        return computerChoice; // return the computer choice
      } else {
        console.log("draw");
        return makeChoice(playerChoice);
      }
    }

    //makeChoice(playerChoice);

    const theChoice = makeChoice(playerChoice);

    console.log(theChoice);

    var choicesContent = document.getElementById("choices-content");
    var result = document.getElementById("result");
    var playerPicked = document.querySelector(`.player-picked #${playerChoice}`);
    var computerPicked = document.querySelector(`.house-picked #${theChoice}`);
    let rulBtn = document.getElementById("rul-btn");

    var currentScore = window.localStorage.getItem("score");

    const showAndHideResult = (order) => {
      if (order === "show") {
        choicesContent.style.display = "none";
        result.style.display = "flex";
        playerPicked.style.display = "block";
        computerPicked.style.display = "block";
        rulBtn.style.display = "none";

      } else if (order === "hide") {
        choicesContent.style.display = "flex";
        result.style.display = "none";
        playerPicked.style.display = "none";
        computerPicked.style.display = "none";
        rulBtn.style.display = "block";
      }
    }

    showAndHideResult("show");

    let resState = document.getElementById("res-state");

    const checkTheWiner = (playerChoice, theChoice) => {
      if (playerChoice === "paper") {

        if (theChoice === "rock") {
          resState.innerHTML = "You win!";
          window.localStorage.setItem("score", ++currentScore);
          scoreText.innerHTML = currentScore;
        } else if (theChoice === "scissors") {
          resState.innerHTML = "You lose!";
        }

      } else if (playerChoice === "rock") {

        if (theChoice === "scissors") {
          resState.innerHTML = "You win!";
          window.localStorage.setItem("score", ++currentScore);
          scoreText.innerHTML = currentScore;
        } else if (theChoice === "paper") {
          resState.innerHTML = "You lose!";
        }

      } else if (playerChoice === "scissors") {

        if (theChoice === "paper") {
          resState.innerHTML = "You win!";
          window.localStorage.setItem("score", ++currentScore);
          scoreText.innerHTML = currentScore;
        } else if (theChoice === "rock") {
          resState.innerHTML = "You lose!";
        }

      }
    }

    checkTheWiner(playerChoice, theChoice);

    var playAgainBtn = document.getElementById("play-again-btn");

    playAgainBtn.addEventListener("click", () => {
      showAndHideResult("hide");
    })

  });
};