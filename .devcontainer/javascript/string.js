const name = "gourav";
const repo = 20

//console.log(name+repo)

//use backticks where we can direct inject the variables
//console.log(`Hello my name is ${name} and my repo count is ${repo}`);

//another type to declare a string 
const anothername = new String('gourav-jain-230');


// console.log(anothername)
// console.log(anothername.__proto__)
// console.log(anothername.toLowerCase())
// console.log(anothername.charAt(3))

//to divide into sub string 
const newstring = anothername.substring(0,3)
//console.log(newstring)

const newstring1 = anothername.slice(-5,3)
//console.log(newstring1)
//.trim() will reduce the extra spaces 

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

//in string splitter split the string into based on condition .split(saperator,limit)
console.log(anothername.split('-'))