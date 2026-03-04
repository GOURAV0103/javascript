<!-- md = markdown file -->
# project  related to DOM

## project link
[click here]()

# solution code

## project 1 : change_body_color
```java script
console.log("Gourav")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
    }
    switch (e.target.id) {
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
    }
    switch (e.target.id) {
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
    }
    switch (e.target.id) {
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
    switch (e.target.id) {
      case 'pink':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## project 2 : BMI Calculator

```javascript
console.log("Project: 2")
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Plesae enter valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Plesae enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Underweight: ${bmi}</span>`;
      // results.innerHTML = 'Underweight';
    } else if (18.6 <= bmi <= 24.9) {
      results.innerHTML = `<span>Normal weight: ${bmi}</span>`;
      // results.innerHTML = 'Normal weight';
    } else {
      results.innerHTML = `<span>Overweight: ${bmi}</span>`;
      // results.innerHTML = 'Overweight';
    }
  }
});

```
## project 3 : BMI clock
```javascript
  const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');
// console.log(clock);

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project 4 : Guess The Number
```javascript
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


```