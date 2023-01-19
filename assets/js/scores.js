"use strict";

const numberOfHighScores = 3;
const highScores = "highScores";

const highScoreString = localStorage.getItem(highScores);
highScores = JSON.parse(highScoreString) ?? [];

const lowestScore = highScores[numberOfHighScores - 1]?.score ?? 0;

function checkHighScore(score) {
    highScores = JSON.parse(localStorage.getItem(highScores)) ?? [];
    const lowestScore = highScores[numberOfHighScores - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores);
      showHighScores();
    }
  }