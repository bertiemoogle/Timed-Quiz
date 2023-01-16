"use strict";

// Declare variables and the elements they will be affecting.

const questions = document.querySelector("#questions");
const startTimer = document.querySelector("#start");
const timer = document.querySelector("#time");

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

