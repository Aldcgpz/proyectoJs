'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessege = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (scores) {
  document.querySelector('.score').textContent = scores;
};
const displayHighscore = function (highscores) {
  document.querySelector('.highscore').textContent = highscores;
};

let score = 5;
let highscore = 0;
let check = function () {
  const guess = document.querySelector('.guess').value;

  const nguess = Number(guess);
  // when no input number
  if (!nguess) {
    displayMessege('⛔No number!');
    // when wins
  } else if (nguess === secretNumber) {
    displayMessege('Win😁');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      displayHighscore(score);
    }
  } else if (nguess !== secretNumber) {
    if (score > 1) {
      displayMessege(guess > secretNumber ? '📈too high!' : '📉too low!');
      displayScore((score -= 1));
    } else {
      displayMessege('Your lost game!');
      displayScore(0);
    }
  }
  // when number is more high
  /*   } else if (nguess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈too high!';
      document.querySelector('.score').textContent = score -= 1;
    } else {
      document.querySelector('.message').textContent = 'Your lost game!';
      document.querySelector('.score').textContent = 0;
    }
    // when number is more low
  } else if (nguess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉too low!';
      document.querySelector('.score').textContent = score -= 1;
    } else {
      document.querySelector('.message').textContent = 'Your lost game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
};

let again = function () {
  displayScore((score = 5));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessege('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
  document.querySelector('.guess').value = null;
};

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', again);
