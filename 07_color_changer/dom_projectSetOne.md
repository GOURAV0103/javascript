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