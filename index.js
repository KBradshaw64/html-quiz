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
var question1 = {
    question: "A 'function' is coded in what language?",
    answer: "JavaScript",
    wrong1: "HTML",
    wrong2: "CSS",
    wrong3: "I don't know"
};

var question2 = {
    question: "What language is primarily used for styling a webpage?",
    answer: "CSS",
    wrong1: "HTML",
    wrong2: "JavaScript",
    wrong3: "Python"
};

var question3 = {
    question: "What does '<br>' do in HTML?",
    answer: "Puts a break in the page",
    wrong1: "Breaks the code",
    wrong2: "brushing his teeth",
    wrong3: "nothing"
};

var question4 = {
    question: "What is a 'boolean'?",
    answer: "A datatype",
    wrong1: "A string",
    wrong2: "An old western boot type",
    wrong3: "A question?"
};

var timerEl = document.getElementById('time-remaining');
var buttonID = document.getElementById('start-button');
var highscoreBTN = document.getElementById('Highscores');
var highscoreHidden = document.getElementById('highscore-hide');
var questionSect = document.getElementById('quest-span');
var questionAll = document.getElementById('questions')
var choiceLi = document.getElementById('choice-list');
var goBackBtn = document.getElementById('go-back');

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var timer;
var timerCount;
var isCorrect = false;
var correctCounter = 0;
var incorrectCounter = 0;

console.log(timerEl)

ArrayQ = [question1, question2, question3, question4]

function printQuestion () {
        var index = Math.floor(Math.random()*ArrayQ.length);
        var item = ArrayQ[index].question;
        var itemGood = ArrayQ[index].answer
        var itemBad = ArrayQ[index].wrong1
        var itemBad2 = ArrayQ[index].wrong2
        var itemBad3 = ArrayQ[index].wrong3
        ArrayQ.splice(index,1);
        questionSect.textContent = item;
        //these are not selecting the correct parameters
        li1.textContent = itemGood;
        li2.textContent = itemBad;
        li3.textContent = itemBad2;
        li4.textContent = itemBad3;
        choiceLi.appendChild(li1);
        choiceLi.appendChild(li2);
        choiceLi.appendChild(li3);
        choiceLi.appendChild(li4);
        console.log(item)
        console.log(li1)
    };

console.log(question1.answer)

highscoreBTN.textContent = "View Highscores"

function Countdown() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = "TIME REMAINING: " + timerCount;
        if (timerCount >= 0) {
            if(isCorrect && timerCount > 0) {
                //answerCorrect();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            //answerIncorrect();
        }
    }, 1000);
}

//function answerCorrect() {}
//needs to add a point to local storage "correct"

//function answerIncorrect() {}

function StartGame() {
    buttonID.disabled = true;
    timerCount = 60;
    Countdown()
    printQuestion()
}



buttonID.addEventListener("click", StartGame);
highscoreBTN.addEventListener("click", function() {
    questionAll.style.display = "none"
    highscoreHidden.style.display = "block"
});
goBackBtn.addEventListener("click", function() {
    questionAll.style.display = "block"
    highscoreHidden.style.display = "none"
})
