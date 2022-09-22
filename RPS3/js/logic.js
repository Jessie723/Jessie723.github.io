//  The 'const' keyword is an alternate way to create a variable compared to 'let'
// The 'let' keyword will allow you to change a variable value later; however,
// the 'const' keyword will cause an error if you try to change it Later.

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

// The getRandomPick() finction should have an equal chance of returning 
// either ROCK, PAPER, or SCISSORS when you execute it.

function getRandomPick( ) {
    // Math.random() returns a random number between 0.00 and 1.00
    let chance = Math.random();
   
    if (chance > 0.66) {
       // If chance is between 0.66 and 1,00, we return ROCK
       return ROCK;
    }  else if (chance > 0.33) {
       // Otherwise, if chance is between 0.33 and 0.66, we return PAPER 
       return PAPER;
    }  else {
       // Otherwise, chance must be between 0.00 and 0.33, so we return SCISSORS
       return SCISSORS;
    }
}
/*
   The getResultText() function acceptz two inputs (the computer and player picks)
   and returns the result of that round of Rock, Paper, Scissors.
   The text is from the perspective of the computer, so it will tell the player
   whether they won or last, or if it was a tie.
*/ 
function getResultText(computerPick, playerPick) {
    const TIE = "It's a tie!";
    const WIN = "You win!";
    const LOSE = "You lose!";

    // if the computer and player pick the same value, then the result is a TIE 
    if (computerPick == playerPick) {
        return TIE;
    }

    /*
      at this point, if the computer and player values were the same,
      we would have already returned a TIE, so we know they must be different now.
    */

    /*
      Here we evaluate the scenarios when the computer picks PAPER;
      If the player picked ROCK, they lose, but if they picked SCISSORS, they win.
    */
   if (computerPick == PAPER && playerPick == ROCK) {
    return LOSE;
   } else if (computerPick == PAPER && playerPick == SCISSORS) {
     return WIN;
   }

   /*
     Here we evaluate the scenarios when the computer picked ROCK;
     if the player picked SCISSORS, hey lose, but if they picked PAPER, they win.
    */
   if (computerPick == ROCK && playerPick == SCISSORS) {
    return LOSE;
   } else if (computerPick == ROCK && playerPick == PAPER) {
     return WIN;
   }

   /*
     Here we evaluate the scenarios when the computer picks SCISSORS;
     if the player picked PAPER, they lose, but if they picked ROCK, they win
    */
   if (computerPick == SCISSORS && playerPick == PAPER) {
    return LOSE;
   } else if (computerPick == SCISSORS && playerPick == ROCK) {
     return WIN;
   }
}

function setUp() {
  // Get the game element, and attach an event listener for animationed 
   let game = document.getElementById("game");
   game.onanimationend = function() {
    // when animatinend is triggered, remove the 'animate' class from game
    this.classList.remove("animate");
   }
  // Get all elements with the 'closer' class, and iterate through them
  // using a for loop, adding click event listeners for all of them 
   let closers = document.querySelectorAll(".closer");
   for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = function() {
      // When a closer element is clicked, remove the 'popped' class to hide
      // the popup, and the execute resetGame()
      var popupContainer = document.getElementById("popupContainer");
      popupContainer.classList.remove("popped");
      resetGame();
    };
   }
  }

function playerGame(yourPick) {

  let myPick = getRandomPick();


  let rockLeft = document.getElementById("rockLeft");
  let paperLeft = document.getElementById("paperLeft");
  let scissorsLeft = document.getElementById("scissorsLeft");
  let rockRight = document.getElementById("rockRight");
  let paperRight = document.getElementById("paperRight");
  let scissorsRight = document.getElementById("scissorsRight");
  let yourPickText = document.getElementById("yourPickText");
  let myPickText = document.getElementById("myPickText");



  yourPickText.innerHTML = yourPick;

  switch(yourPick) {
    case ROCK:
       rockLeft.classList.add("selected");
       break;
     case PAPER:
       paperLeft.classList.add("selected");
        break;
      case SCISSORS:
        scissorsLeft.classList.add("selected");
        break;
  }


  myPickText.innerHTML = myPick;

  switch(myPick) {
    case ROCK:
      rockRight.classList.add("selected");
      break;
    case PAPER:
      paperRight.classList.add("selected");
      break;
    case SCISSORS:
      scissorsRight.classList.add("selected");
      break;
  }



  let result = document.getElementById("result");

  result.innerHTML = getResultText(myPick,yourPick);
}


/*
  The resetGame() function resets all the hand variations and text elements 
  back to their original states: hidden and empty, respectively
*/
 function resetGame() {
  // Access the document to get references to all the hand variations and text
  let rockLeft =document.getElementById("rockLeft");
  let paperLeft = document.getElementById("paperLeft");
  let scissorsLeft = document.getElementById("scissorsLeft");
  let rockRight = document.getElementById("rockRight");
  let paperRight = document.getElementById("paperRight");
  let scissorsRight = document.getElementById("scissorsRight");
  let yourPickText = document.getElementById("yourPickText");
  let myPickText = document.getElementById("myPickText");


  // Clear ou the player and computer pick text element s
  yourPickText.innerHTML = "";
  myPickText.innerHTML = "";

  // Remove the 'selected' class from any hand variation that ahve it 
  // so that they become hiffen again 
  rockLeft.classList.remove("selected");
  paperLeft.classList.remove("selected");
  scissorsLeft.classList.remove("selected");
  rockRight.classList.remove("selected");
  paperRight.classList.remove("selected");
  scissorsRight.classList.remove("selected");

  
  // Access the document for the result element, and clear that out too
  let result = document.getElementById("result");
  result.innerHTML = "";
}
/*
  The popAndPlay() function accepts one input parameter for the player pick.
  The function does three things:
    it triggers the game popup by adding the 'popped' class to the container,
    it triggers the animation of the fists by adding 'animate' to the game,
    and it executes playGame() with the player pick to render the results
*/
function popAndPlay(yourPick) {
  // Access the document to get references to popupContainer and game 
  let popupContainer = document.getElementById("popupContainer");
  let game = document.getElementById("game");

  // Add the 'popped' and 'animate' classes to trigger the popup and animation
  popupContainer.classList.add("popped");
  game.classList.add("animate");


  // Execute the playGame() function with the player pick 
  playerGame(yourPick);
}
