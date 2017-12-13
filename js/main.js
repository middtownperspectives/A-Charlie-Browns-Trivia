console.log("java up and running");
//list of characters
var charlieBrown = document.getElementById("charlieBrown");
var sallyBrown = document.getElementById("sallyBrown");
var marcie = document.getElementById("marcie");
var peppermintpatty = document.getElementById("peppermintpatty");
var schroeder = document.getElementById("schroeder");
var linus = document.getElementById("linus");
var lucy = document.getElementById("lucy");
var snoopy = document.getElementById("snoopy");
var woodstock = document.getElementById("woodstock");

//list of questions and list of answers
var questionBank = ["who has a big head", "who has a blanket", "who plays the piano", "who has a best bird friend"];
var solutionBank = ["Charlie Brown", "Linus", "Schroeder", "Snoopy"];
var clickValue = 0;

//generate random question
function generateQuestion() {
	question = Math.floor(Math.random() * questionBank.length);
	console.log(questionBank[question]);
}
  	generateQuestion();
	console.log(question);

//check answer function
function checkAnswer() {
	answer = solutionBank[question];
    if (question == solutionBank[question]){
    	console.log(solutionBank[question]);
    	console.log("right answer");
    	} else {
    	console.log("wrong answer");
    }
}
 checkAnswer();
console.log(answer);

//click value
document.getElementById("charlieBrown").addEventListener("click", console.log(answer));
























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


