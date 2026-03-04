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
