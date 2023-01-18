"use strict";

// Declare variables and the elements they will be affecting.

const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const questions = document.querySelector("#questions");
const startTimer = document.querySelector("#start");
const timer = document.querySelector("#time");
const questionList = document.querySelector(".questionList");
const answers = ["a", "c", "c", "a", "d", "a", "c", "a", "b", "a"];
let buttonClicked = document.querySelectorAll(".qzbtn");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials").textContent;
let timeLeft;
let answer;
let score;
let highScores = [];

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

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[0]) {
            console.log("OK");
            allQuestions2()
        } 
    }

function allQuestions2() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[1];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[1][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[2]) {
            console.log("OK");
            allQuestions3()
        }
    }
}
}

function allQuestions3() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[2];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[2][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[2]) {
            console.log("OK");
            allQuestions4()
        }
    }
}

function allQuestions4() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[3];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[3][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[0]) {
            console.log("OK");
            allQuestions5()
        }
    }
}

function allQuestions5() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[4];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[4][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[2]) {
            console.log("OK");
            allQuestions6()
        }
    }
}

function allQuestions6() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[5];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[5][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[0]) {
            console.log("OK");
            allQuestions7()
        }
    }
}

function allQuestions7() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[6];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[6][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[2]) {
            console.log("OK");
            allQuestions8()
        }
    }
}

function allQuestions8() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[7];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[7][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[0]) {
            console.log("OK");
            allQuestions9()
        }
    }
}

function allQuestions9() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[8];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[8][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[2]) {
            console.log("OK");
            allQuestions10()
        }
    }
}

function allQuestions10() {
    document.querySelector("#question-title").textContent = Object.keys(quizQuestions)[9];

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".qzbtn")[i].textContent = Object.values(quizQuestions)[9][i];
    };

    let theParent = document.querySelector("#questions");
    theParent.addEventListener("click", clickBox, false);
    function clickBox(e) {
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target.id;
            console.log(clickedItem);
            }

        if (e.target.id === answers[0]) {
            console.log("OK");
            questions.classList.add("hide");
            endScreen.classList.remove("hide");
        }
    }
}