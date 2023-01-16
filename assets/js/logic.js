"use strict";

const startTimer = document.querySelector("#start");
const timer = document.querySelector("#time");

document.querySelector("#start").addEventListener("click", function() {
    let timeLeft = 10;
    let elem = document.getElementById('time');

    let timerId = setInterval(countdown, 1000);

    function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
  }
}
});