const num = new Number(100)
///console.log(num)

//console.log(num.toString().length);

//console.log(num.toFixed(2))//it will add float value 100.00
const num1 = 230
//console.log(num1.toPrecision(3))//it will roundoff the number

const num3 = 100000;
//console.log(num3.toLocaleString('en-IN'))//add coma a make readable format

//++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++
//console.log(Math.abs(-4))//make negative value to positive


//console.log(Math.round(4.6))
//console.log(Math.ceil(4.6))//it consider upper/higher value 4.1 as 5
//console.log(Math.floor(4.6))//it consider the lower value of input interger 4.9 as 4



//.sqrt,.power,.min,.max,

//RAMDOM
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)