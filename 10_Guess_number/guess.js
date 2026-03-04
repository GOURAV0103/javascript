let random = parseInt(Math.random() * 100 + 1);
// console.log(random);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numgusses = 0;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validationcheck(guess);
  });
}

function validationcheck(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Enter a valid number between 1 to 100');
  } else {
    prevguess.push(guess);
    dispalyGuess(guess);

    if (playgame) {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`CONGRATULATION YOU WON`);
    endGame();
  } else if (guess > random) {
    displayMessage(`GUESS SMALLER NUMBER`);
  } else {
    displayMessage(`GUESS GREATER NUMBER`);
  }
}

function dispalyGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numgusses++;
  remaining.innerHTML = `${10 - numgusses}`;
  if (numgusses >= 10) {
    displayMessage(`Game over. Random number was ${random}`);
    endGame();
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">START AGAIN</h2>`;
  startOver.appendChild(p);
  playgame = false;
  startGame();
}
function startGame() {
  const newgame = document.querySelector('#newGame');
  newgame.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numgusses = 0;
    guessSlot.innerHTML = ' ';
    remaining.innerHTML = `${10}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}
