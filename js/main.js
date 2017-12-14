console.log("java up and running");

//list of questions and list of answers and variables to maintain
var questionBank = ["Who has a big head?", "Who has a blanket?", "Who plays the piano?", "Who has a best bird friend?"];
var solutionBank = ["Charlie Brown", "Linus", "Schroeder", "Snoopy"];
var trivia = document.getElementById("questionBoard");
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOne = document.getElementById("player1Score");
var playerTwo = document.getElementById("player2Score");
var removed = 0;

// generate random question
function generateQuestion() {
	question = Math.floor(Math.random() * questionBank.length);
	console.log(questionBank[question]);
	answer = solutionBank[question];
	//remove question from questionbank
	if (questionbank.length > -1) {
    questionbank.splice(question, 1);
}
	trivia.innerHTML = questionBank[question];	
}
  	// create onClick function for this
  	generateQuestion();
	console.log(question);
	console.log(answer);

//question counter
function questionCounter(){

}






// //remove question
// function removeQuestion(){
// 		questionBank.splice(question, 1);
// 	}
// 	console.log(removed);



//check answer function
function checkAnswer(e) {
	console.log(playerOneScore);
    if ( e.textContent == answer){
    	playerOneScore++;
    	playerOne.innerHTML =  playerOneScore;
    	console.log(playerOneScore);
    	//     audio.play();
    	console.log(answer);
    	console.log(question);
    	console.log(e.textContent);
    	console.log("right answer");
    	} else {
    	console.log("wrong answer");
    	console.log(e.textContent);
    }
    generateQuestion();
}

//Restart Game
function newGame() {
  location.reload();
}


 // checkAnswer();
console.log(answer);

//click answers by list of characters
var charlieBrown = document.getElementById("charlieBrown").addEventListener("click", function(e){
	checkAnswer(this);
	console.log(e);
});
var sallyBrown = document.getElementById("sallyBrown").addEventListener("click", function(e){
	checkAnswer(this);
	console.log(e);
});
var marcie = document.getElementById("marcie").addEventListener("click", function(e){
	checkAnswer(this);
	console.log(e);
});
var peppermintpatty = document.getElementById("peppermintPatty").addEventListener("click", function(e){
	checkAnswer(this);
	console.log(e);
});
var schroeder = document.getElementById("schroeder").addEventListener("click", function(e){
	checkAnswer(this);
});
var linus = document.getElementById("linus").addEventListener("click", function(e){
	checkAnswer(this);
});
var lucy = document.getElementById("lucy").addEventListener("click", function(e){
	checkAnswer(this);
});
var snoopy = document.getElementById("snoopy").addEventListener("click", function(e){
	checkAnswer(this);
});
var woodstock = document.getElementById("woodstock").addEventListener("click", function(e){
	checkAnswer(this);
});



//play audio
// function play(){
// 	var audio = new Audio(url("../media/blokhead.wav"));
//     audio.play();
// }












// function generateQuestion() {
// 	for (var i = 0; i < Math.floor(Math.random() * questionBank.length){
// 		questions = questionBank[i];
// 	console.log(questionBank[question]);
// 	answer = solutionBank[question];
// 	trivia.innerHTML += questionBank[question];
// }
//   	// create onClick function for this
//   	generateQuestion();
// 	console.log(question);
// 	console.log(answer);







// document.getElementById("charlieBrown")
// 		.addEventListener("click", checkAnswer() {
// 			if (question == solutionBank[question]) {
// 			console.log("charlie brown");
// 			} else 
// 			console.log("You are wrong");



//---- example code from overstack ----//
// var foo = 'a';    

// document
// .getElementById('foo')
// .addEventListener('click', function(bar) {

//   // return the actual event handler function
//   return function() {
//     doSomething(bar);
//   };

// }(foo) /* <-- passing in the current foo*/, false); 
    
// foo = 'b';

// function doSomething (val) {
//   alert(val);
// }
//---- end of example code ----//






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


