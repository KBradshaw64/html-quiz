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
console.log(timerEl)

function Countdown() {
    var timeleft = 6000;
    var timeInterval = setInterval(function () {
        timeleft--;
        timerEl.textContent = "Time remaining: " + timeleft
        if(timeleft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "NO TIME LEFT"
        }
    })
}

buttonID.addEventListener("click", Countdown)