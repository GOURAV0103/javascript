//array
const myarr = [1,2,3,4,5,6]
// console.log(myarr[3])

const myheros = ["shaktiman","naagraj"]
// console.log(myheros)

const arr2 = new Array(1,23,3,4)

//+++++++++++++++array methods+++++++++++++++++++++
// myarr.length
// myarr.push(22)
// myarr.push(7)
// myarr.pop()
myarr.unshift(0)
// console.log(myarr)
//#unshift add element at the starting

myarr.shift()
// console.log(myarr)
//#shift remove element from the starting of the array


// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3))

//convert the array into string 
let newarry = myarr.join()
// console.log(myarr)
//convert array  into string
// console.log(newarry)


console.log(myarr)

//slice or splice
console.log("A ",myarr)

const newarr = myarr.slice(1,3)

console.log(newarr)
console.log("B ",myarr)

const newarr2 = myarr.splice(1,3)

console.log("c ",newarr2)
console.log(newarr2);
