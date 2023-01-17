"use strict";

// Declare variables and the elements they will be affecting.

const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const startTimer = document.querySelector("#start");
const timer = document.querySelector("#time");
const questionList = document.querySelector(".questionList");
let buttonClicked = document.querySelectorAll(".qzbtn");
let timeLeft;
let answer;
let score;
let highScores = [];

for (var i = 0; i < buttonClicked.length; i++) {
  buttonClicked[i].addEventListener("click", function() {
    if (this.innerText === "Object-Oriented") {
        answer = "correct";
        console.log(answer);
        if (answer === "correct") {
            // questions.classList.add("hide");
            questionArray()
        }
  }
}
)};

function questionArray() {
    // for (let i = 0; i < quizQuestions.length; i++) {
    //     quizQuestions = quizQuestions[i]
    // }
    // questions.classList.remove("hide");
    console.log("Question Array");
}  


// Clicking the "Start Quiz" button starts the timer and reveals the questions.

document.querySelector("#start").addEventListener("click", function () {
    allQuestions();
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    let timeLeft = 90;
    let time = document.querySelector('#time');

    let timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
        } else {
            time.innerHTML = timeLeft;
            timeLeft--;
            score = timeLeft;
            highScores.push(score);
            
        }
    }
});
console.log(highScores);
// Places the question and the four possible answers.

function allQuestions() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[0];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[0][i];
    };
    
}



document.querySelector(".qzbtn").addEventListener("click", function () {
        
});