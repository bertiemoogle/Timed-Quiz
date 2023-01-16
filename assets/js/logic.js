"use strict";

// Declare variables and the elements they will be affecting.

const questions = document.querySelector("#questions");
const startTimer = document.querySelector("#start");
const timer = document.querySelector("#time");
const questionList = document.querySelector(".questionList");




// Clicking the "Start Quiz" button starts the timer and reveals the questions.

document.querySelector("#start").addEventListener("click", function() {
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
  }
}
});

// Button clicked in answer to question.
document.querySelector(".qzbtn").addEventListener("click", function() {
    console.log("Button clicked");
});

// Places the question.
document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[0];

// Places the four answer options on the buttons.

for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[0][i];
};
