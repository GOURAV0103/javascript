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

```