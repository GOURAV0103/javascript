let score = "23asf";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)
//"23" easily coverted into number 
//"23asf" is NaN
//"true" = 1 and "false" = 0

let login = 1
let bool = Boolean(login);
console.log(bool);

//+++++++++++++++++++++++++++++MEMORY USAGE+++++++++++++++++++++++++
//TWO TYPES STACK(use in premitive datatype change the copy not original), AND HEAP(use in non-premitive datatype change the original)
let mywork = "University"

let anothername = mywork;
anothername = "chaiaurcode";
console.log(mywork);
console.log(anothername);