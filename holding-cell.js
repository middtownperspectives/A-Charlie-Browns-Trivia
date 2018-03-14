console.log('JavaScript up and running');

//jquery just for the modal to work properly
$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

// end of all jquery

//list of questions and list of answers and variables to maintain
var questionBank = ['Who has a big head?', 'Who has a blanket?', 'Who plays the piano?', 'Whose best friend is a bird?', 'Who is Charlie Browns sister?', 'Who is the dustiest character?', 'Who is known to be crabby or bossy?', 'His archnemesis is a kite?', 'She is the sweetest and the smartest of them all.', 'Who sits or leans on Schroeder piano?', 'Who hosted the Halloween party at her house in "It’s the Great Pumpkin Charlie Brown"?', 'Who portrayed a shepherd in "A Charlie Brown Christmas"?', 'Who believes in the "Great Pumpkin"?', 'Refers to the cloud that surrounds him with pride as "the dust of ancient civilizations".'];

var solutionBank = ['charlieBrown', 'linus', 'schroeder', 'snoopy', 'sallyBrown', 'pigpen', 'lucy', 'charlieBrown', 'marcie', 'lucy', 'sallyBrown', 'linus', 'linus', 'pigPen'];

var trivia = document.getElementById('questionBoard');
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOne = document.getElementById('player1Score');
var playerTwo = document.getElementById('player2Score');
var counter = 0;

// if current player is player 1, currentPlayerScore = playerOneScore
var currentPlayerScore = 0;
var currentPlayer;

function getCurrentPlayer() {
  if (counter >= 1 && counter < 8) {
    currentPlayer = 1;
  } else if (counter >= 8 && counter < 15) {
    currentPlayer = 2;
  }
}

console.log(currentPlayerScore);

//generate random question
function generateQuestion() {
  question = Math.floor(Math.random() * questionBank.length);
  questionBank.shift();
  solutionBank.shift();
  counter += 1;
  answer = solutionBank[question];
  trivia.innerHTML = questionBank[question];

  //find player's turn
  if (counter === 1) {
    alert('Are you ready player 1!');
  } else if (counter === 8) {
    alert('Get ready player 2');
    generateQuestion();

  //player two turn;
  } else if (counter === 15) {

    //game over and check winner
    checkWinner();
    play3();
    alert('game over');
    newGame();
  }
}

generateQuestion();
console.log(question);
console.log(questionBank[question]);
console.log(answer);
console.log(counter);

//clear box after initial selection
function clearBox(displayBoard) {
  document.getElementById('displayBoard').innerHTML = '';
}

//check answer function
function checkAnswer(e) {
  console.log('checking answer');
  console.log(e.id);

  //console.log(playerOneScore);
  if (e.id == answer) {
    console.log(e.id);
    play2();
    getCurrentPlayer();
    clearBox();
    console.log('right answer');

    var correctMessage = document.createElement('p');

    //and give it some content
    var correct = document.createTextNode('Correct !!!');

    //add the text node to the newly created div
    correctMessage.appendChild(correct);

    //add the newly created element and its content into the DOM
    var message = document.getElementById('displayBoard');
    message.appendChild(correctMessage);

    if (currentPlayer === 1) {
      playerOneScore++;
      playerOne.innerHTML =  playerOneScore;
    } else if (currentPlayer === 2) {
      playerTwoScore++;
      playerTwo.innerHTML =  playerTwoScore;
    }

  } else {
    play1();
    clearBox();
    var blockheadMessage = document.createElement('p');

    //and give it some content
    var node = document.createTextNode('You Block Head !!!');

    //add the text node to the newly created div
    blockheadMessage.appendChild(node);

    //add the newly created element and its content into the DOM
    message = document.getElementById('displayBoard');
    message.appendChild(blockheadMessage);
    console.log('wrong answer');
    console.log(playerOneScore);
    console.log(counter);
    console.log(answer);
  }

  generateQuestion();
}

function checkWinner() {
  if (playerOneScore === playerTwoScore) {
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode('Tie Game. Play Again!!!');
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById('displayBoard');
    document.body.insertBefore(newDiv, currentDiv);
  } else if (playerOneScore > playerTwoScore) {
    var otherDiv = document.createElement('div');
    var otherContent = document.createTextNode('Player One Wins!!!');
    otherDiv.appendChild(otherContent);
    var anotherDiv = document.getElementById('displayBoard');
    document.body.insertBefore(otherDiv, anotherDiv);
  } else if (playerOneScore > playerTwoScore) {
    var thisDiv = document.createElement('div');
    var thisContent = document.createTextNode('Player One Wins!!!');
    thisDiv.appendChild(thisContent);
    var thatDiv = document.getElementById('displayBoard');
    document.body.insertBefore(thisDiv, thatDiv);
  }
}

//Restart Game
function newGame() {
  location.reload();
}

//click answers by list of characters
var charlieBrown = document.getElementById('charlieBrown').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);

});

var sallyBrown = document.getElementById('sallyBrown').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);

});

var sallyBrown = document.getElementById('pigpen').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);

});

var marcie = document.getElementById('marcie').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var peppermintpatty = document.getElementById('peppermintPatty').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var schroeder = document.getElementById('schroeder').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var linus = document.getElementById('linus').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var lucy = document.getElementById('lucy').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var snoopy = document.getElementById('snoopy').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

var woodstock = document.getElementById('woodstock').addEventListener('click', function (e) {
  checkAnswer(this, currentPlayerScore);
});

function play1() {
  var audio1 = document.getElementById('audio1');
  audio1.play();
}

function play2() {
  var audio2 = document.getElementById('audio2');
  audio2.play();
}

function play3() {
  var audio3 = document.getElementById('audio3');
  audio3.play();
}
