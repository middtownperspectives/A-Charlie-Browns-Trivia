console.log("java up and running");

//list of questions and list of answers and variables to maintain
var questionBank = ["Who has a big head?", "Who has a blanket?", "Who plays the piano?", "Who has a best bird friend?", "Who is Charlie Brown's sister?", "Who is the dirtiest character?",
					"Who is known to be selfish, crabby or just bossy?", "His arch nemisis is a kite?", "She is the sweetest and the smartes of them all.","Who does Schroeder have sitting on his piano?",
					"Who hosted a Halloween party at her house in It’s the Great Pumpkin Charlie Brown?", "Who portrayed a shepherd in A Charlie Brown Christmas?", "Which character has always believes in the 'Great Pumpkin'?",
					"He sometimes refers to the cloud that surrounds him with pride as the dust of ancient civilizations."];
var solutionBank = ["Charlie Brown", "Linus", "Schroeder", "Snoopy", "Sally Brown", "Pig Pen", "Lucy", "Charlie Brown", "Marcie", "Lucy", "Sally Brown", "Linus", "Linus", "Pig Pen"];
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
	} else if (counter === 8) {
		alert("player two's turn");
		generateQuestion();
		//player two turn;
	} else if (counter === 15) {
		//player two stuff goes here?? -- help --
		checkWinner();
		play3();
		alert("game over");
		newGame();
	} 
}
  	generateQuestion();
  	console.log(question);
	console.log(questionBank[question]);
	console.log(answer);
	console.log(counter);

//check answer function
function checkAnswer(e) {
	//console.log(playerOneScore);
    if ( e.textContent == answer){
    	play2();
	    getCurrentPlayer();
	    console.log("right answer");

		var newDiv = document.createElement("div"); 
		//and give it some content 
	  	var newContent = document.createTextNode("That's Right!!!"); 
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

    } else {
    	play1();
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
function checkWinner(){
	if (playerOneScore === playerTwoScore) {
		var newDiv = document.createElement("div"); 
	  	var newContent = document.createTextNode("Tie Game. Play Again!!!"); 
	  	newDiv.appendChild(newContent);  
	  	var currentDiv = document.getElementById("displayBoard"); 
	  	document.body.insertBefore(newDiv, currentDiv); 
	} else if (playerOneScore > playerTwoScore){
		var otherDiv = document.createElement("div"); 
	  	var otherContent = document.createTextNode("Player One Wins!!!"); 
	  	otherDiv.appendChild(otherContent);  
	  	var anotherDiv = document.getElementById("displayBoard"); 
	  	document.body.insertBefore(otherDiv, anotherDiv); 
	} else if (playerOneScore > playerTwoScore){
		var thisDiv = document.createElement("div"); 
	  	var thisContent = document.createTextNode("Player One Wins!!!"); 
	  	thisDiv.appendChild(thisContent);  
	  	var thatDiv = document.getElementById("displayBoard"); 
	  	document.body.insertBefore(thisDiv, thatDiv); 
	}
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


function play1() {
       var audio1 = document.getElementById("audio1");
       audio1.play();
}
function play2() {
       var audio2 = document.getElementById("audio2");
       audio2.play();
}
function play3() {
       var audio3 = document.getElementById("audio3");
       audio3.play();
}


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


