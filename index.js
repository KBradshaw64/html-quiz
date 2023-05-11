// there need to be variables to show answers right/wrong as well as a highscore table to track the most answered correctly in a run
// there needs to be a 30 second timer that starts when a new question appears on screen
// if the timer runs out then the question is marked wrong and automatically goes to next question
// there should be a start button to initiate the quiz, and each multiple choice has a button that is either "wrong" or "correct"


// maybe make each question a variable with set attributes like the correct answer in order for function to check
// var question1 = {
    question: "bsdssfdjgznkj"
    answer: "awshbsldg"
    wrong1: "awd"
    
// }
// then have a function that calls for question1.question and an if statement that says is event.target = question1.answer then print "correct!" etc

var timerEl = document.getElementById('time-remaining');
var buttonID = document.getElementById('start-button');

var timer;
var timerCount;
var isCorrect = false;
var correctCounter = 0;
var incorrectCounter = 0;

console.log(timerEl)

function Countdown() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = "TIME REMAINING: " + timerCount;
        if (timerCount >= 0) {
            if(isCorrect && timerCount > 0) {
                answerCorrect();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            answerIncorrect();
        }
    }, 1000);
}

function answerCorrect() {

}

function answerIncorrect() {

}

function StartGame() {
    buttonID.disabled = true;
    timerCount = 60;
    Countdown()
}

buttonID.addEventListener("click", StartGame);