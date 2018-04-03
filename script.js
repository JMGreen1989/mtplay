// I got trivia questions from a variety of websites
// I'd like to thank the GA Opportunity TAs for all the help
// Also I'd like to thank my classmates who lended a hand


//beginning of jQuery
$(document).ready(function(){



//global variables for keeping tracking of how good or bad the player
//is doing
let gameScore = 0;
let youLose = 0;

//I am making the "Lets play" button hide when you click on it
//This lets the player start the game
$('.startBtn').on('click', () => {
    $('.startBtn').hide();
    $('#gameContainer').css('display', 'initial');
  });


// the Qs and As
const triviaGame = [
  {
    question: "1. Which bridge connects Manhattan to Brooklyn?",
    choices: ["Golden Gate", "Brooklyn", "London"],
    answer: "Brooklyn"
  }, {
    question: "2. How many floors does the Empire State Building have?",
    choices: ["102", "204", "900"],
    answer: "102"
  }, {
    question: "3. The name of the three-hour sightseeing boat in Manhattan?",
    choices: ["Boaty McBoatface", "The Sightseeing Line", "Circle Line"],
    answer: "Circle Line"
  }, {
    question: "4. Who was elected mayor of New York in November 2001?",
    choices: ["Mike Pence", "Rudy Giuliani", "Mike Bloomberg"],
    answer: "Mike Bloomberg"
  }, {
    question: "5. Where is DUMBO?",
    choices: ["Brooklyn", "Bronx", "Queens"],
    answer: "Brooklyn"
  }, {
    question: "6. There is a man who mines sidewalk cracks looking for ___",
    choices: ["Pennies", "Gold", "Pokemon"],
    answer: "Gold"
  }, {
    question: "7. What past President was born in NYC?",
    choices: ["Theodore Roosevelt", "JFK", "Dwight Eisenhower"],
    answer: "Theodore Roosevelt"
  }, {
    question: "8. Before Ellis Island, where did immigrants come in to?",
    choices: ["JFK", "Castle Garden", "Brooklyn" ],
    answer: "Castle Garden"
  }, {
    question: "9. The Statue of Libery is located on which island?",
    choices: ["Governors Island", "Ellis Island", "Liberty Island"],
    answer: "Liberty Island"
  }, {
    question: "10. What bridge connects Staten Island to Brooklyn?",
    choices: ["Brooklyn", "George Washington", "Varrazano"],
    answer: "Varrazano"
  }
];


//The win lose function. It evaulates if what you click on -->
//--> is the right answer
// questionNumber is the position of the questions in the array.
// it starts at 0 AKA the first question and continues
// Andrew Craft helped me with this function
let questionNumber = 0;
function evaluate(questionObject, answer) {
  //if you you choose the answer that's correct you'll progress
  if (answer === questionObject.answer){
  alert("You're correct!");
  gameScore += 1;
  //likewise, if you choose wrong you'll be alerted as such
    }else {
  youLose += 1;
  alert("Sorry, wrong answer!");
}
//this progresses the points the player accumulates for the win logic
 questionNumber += 1
 askQuestion(questionNumber);
 winLogic();
}

// your gameScore is 10 AKA you get all 10 right, you win
// if you get 4 wrong, you lose
function winLogic() {
  if (gameScore===10) {
  alert("Nice going! You win");
  location.reload();
}else if  (youLose===4) {
  alert("Sorry! You lose. Better luck next time!");
  location.reload();
}};



// thank you Andrew Craft for help with this as well
function askQuestion(i) {
//looping through the Array so it can appear on the div
 for(let i=0;i<3;i++);
  //gameQuestion is the div for housing the trivia questions
  gameQuestion = $('#gameQuestion');
  gameQuestion.text(triviaGame[i].question);
//the first choice from the array appears on the choice1 div
$('#choice1').text(triviaGame[i].choices[0])
 //Needed to set the click event off first otherwise the alerts kept-->
 //--> on going
  $('#choice1').off()
  $('#choice1').on('click', () => {
  //this method is executed by evaluate and .html() sets the div on screen
  evaluate(triviaGame[i], $('#choice1').html())
  });
  //the process is repeated for the other two choices to choose from
  $('#choice2').text(triviaGame[i].choices[1])
  $('#choice2').off()
  $('#choice2').on('click', () => {
  evaluate(triviaGame[i], $('#choice2').html())
  });
  $('#choice3').text(triviaGame[i].choices[2])
  $('#choice3').off()
  $('#choice3').on('click', () => {
    evaluate(triviaGame[i], $('#choice3').html())
  });
  }
  //executing the function starting with the first one, 0
  askQuestion(0);
})
