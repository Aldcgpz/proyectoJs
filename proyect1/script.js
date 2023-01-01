'use strict';
/*const messege = document.querySelector('.message').textContent;
  const score = document.querySelector('.score').textContent;
  const number = document.querySelector('.number').textContent;
  const highscore = document.querySelector('.highscore').textContent;
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 5;
let highscore = 0;
let check = function () {
  const guess = document.querySelector('.guess').value;

  const nguess = Number(guess);
  // when no input number
  if (!nguess) {
    document.querySelector('.message').textContent = '⛔No number!';
    // when wins
  } else if (nguess === secretNumber) {
    document.querySelector('.message').textContent = 'Win😁';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
    // when number is more high
  } else if (nguess > secretNumber) {
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
  }
};

let again = function () {
  document.querySelector('.score').textContent = score = 5;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
  document.querySelector('.guess').value = null;
};
document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', again);
