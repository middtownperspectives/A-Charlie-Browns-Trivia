console.log("java up and running");

//list of questions and list of answers and variables to maintain
var questionBank = ["Who has a big head?", "Who has a blanket?", "Who plays the piano?", "Who has a best bird friend?"];
var solutionBank = ["Charlie Brown", "Linus", "Schroeder", "Snoopy"];
var trivia = document.getElementById("questionBoard");
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOne = document.getElementById("player1Score");
var playerTwo = document.getElementById("player2Score");
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
	counter += 1;
	answer = solutionBank[question];
	trivia.innerHTML = questionBank[question];	

	//find player's turn
	if (counter === 1) {
	alert("player one goes first!");
	} else if (counter === 7) {
	alert("player two's turn");
	generateQuestion();
	//player two turn;
	} else if (counter === 14) {

	//player two stuff goes here?? -- help --
	checkWinner();
	alert("game over");
	newGame();
	} else {
	//referesh page
	}	
}
  	generateQuestion();
  	console.log(question);
	console.log(questionBank[question]);
	console.log(answer);
	console.log(counter);

function checkWinner() {
	if (playerOne == playerTwo){
		alert("tie game, play another round");
	} else if (playerOne > playerTwo) {
		alert("player one wins!!");
	} else if (playerOne < playerTwo) {
		alert ("player two wins!!");
	}
}

//check answer function
function checkAnswer(e) {
	//console.log(playerOneScore);
    if ( e.textContent == answer){
	    getCurrentPlayer();

		var newDiv = document.createElement("div"); 
		//and give it some content 
	  	var newContent = document.createTextNode("There is hope for you yet Charlie Brown!!"); 
		//add the text node to the newly created div
	  	newDiv.appendChild(newContent);  
		//add the newly created element and its content into the DOM 
	  	var currentDiv = document.getElementById("displayBoard"); 
	  	document.body.insertBefore(newDiv, currentDiv); 

	  	if(currentPlayer === 1) {
	  		playerOneScore++;
	  		playerOne.innerHTML =  playerOneScore;
	  	} else if (currentPlayer === 2) {
	  		playerTwoScore++;
	  		playerTwo.innerHTML =  playerTwoScore;
	  	}
	 //    console.log(playerOneScore);
	 //    console.log(answer);
		// //console.log(question);
	 //    console.log(e.textContent);
	 //    console.log(counter);
	 //    console.log("right answer");
    } else {
    var otherDiv = document.createElement("div"); 
	//and give it some content 
  	var otherContent = document.createTextNode("You Block Head"); 
	//add the text node to the newly created div
  	otherDiv.appendChild(otherContent);  
	//add the newly created element and its content into the DOM 
  	var thatDiv = document.getElementById("displayBoard"); 
  	document.body.insertBefore(otherDiv, thatDiv); 
    console.log("wrong answer");
    console.log(playerOneScore);
    console.log(counter);
    console.log(e.textContent);
    }
    generateQuestion();
}


//Restart Game
function newGame() {
  location.reload();
}

//click answers by list of characters
var charlieBrown = document.getElementById("charlieBrown").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
	console.log(currentPlayerScore);
	console.log(e);
});
var sallyBrown = document.getElementById("sallyBrown").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
	console.log(e);
});
var sallyBrown = document.getElementById("pigpen").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
	console.log(e);
});
var marcie = document.getElementById("marcie").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
	console.log(e);
});
var peppermintpatty = document.getElementById("peppermintPatty").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
	console.log(e);
});
var schroeder = document.getElementById("schroeder").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
});
var linus = document.getElementById("linus").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
});
var lucy = document.getElementById("lucy").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
});
var snoopy = document.getElementById("snoopy").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
});
var woodstock = document.getElementById("woodstock").addEventListener("click", function(e){
	checkAnswer(this, currentPlayerScore);
});




//-------------- GRAVE YARD --------------//


//play audio
// function play(){
// 	var audio = new Audio(url("../media/blokhead.wav"));
//     audio.play();
// }


// 	if (questionbank.length > -1) {
//     questionbank.splice(question, 1);
// }


// function myFunction() {
//     document.getElementById("field2").value = document.getElementById("field1").value;
// }


// if (charlieBrown == question == solutionBank[question])
// 		console.log("charlie brown audio");
// } else {
// 	console.log("charlie brown losing audio")
// }
// el.addEventListener("click", modifyText, false);


//need to create a click button to start game
//create an alert with player 1's turn
//need to give each character a clickable div inorder to check answer


