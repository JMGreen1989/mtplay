//  got trivia questions from a variety of websites

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


//this is the win lose function. It evaulates if what you click on -->
//--> is the right answer
// questionNumber is the position of the questions in the array. 0-9.
let questionNumber = 0;
function evaluate(questionObject, answer) {
  if (answer === questionObject.answer){
  alert("You're correct!");
  gameScore += 1;
    }else {
  youLose += 1;
  alert("Sorry, wrong answer!");

}
 questionNumber += 1
 askQuestion(questionNumber);
 winLogic();
}

function winLogic() {
  if (gameScore===10) {
  alert("Nice going! You win");
  location.reload();
}else if  (youLose===4) {
  alert("Sorry! You lose. Better luck next time!");
  location.reload();
}};



// thank you Andrew Craft for help with this
    function askQuestion(i) {
    //looping over each question to appear on screen
  for(let i=0;i<3;i++);
  gameQuestion = $('#gameQuestion');
  gameQuestion.text(triviaGame[i].question);
  //picking each choice and finding out whether it's right or wrong
  $('#choice1').text(triviaGame[i].choices[0])
  //need to turn off click handlers
  $('#choice1').off()
  $('#choice1').on('click', () => {
    evaluate(triviaGame[i], $('#choice1').html())
  });
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
  askQuestion(0);

  //jQuery closing
  });
