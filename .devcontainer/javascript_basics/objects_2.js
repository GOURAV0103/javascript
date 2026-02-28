// const tinderuser = new  Object()  //singletone object
const tinderuser = {}//Non singletone oject

tinderuser.id = "abc123";
tinderuser.name = "Sam"
tinderuser.isloggedin = false

// console.log(tinderuser);

//nested objects example
const regularuser = {
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sam",
            lastname:"choudhary"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"c",4:"D"}

//const obj3 = {obj1,obj2}//it will merge two objects into a  new third  object

// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)//it will combine all object into  a single object (target,source)

const obj3 = {...obj1,...obj2}

// console.log(obj3)

// object in array
const users = [
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"i@gmail.com"
    },
    {
        id:4,
        email:"j@gmail.com"
    }
]
// console.log(users[2].id)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));//it makes the arrays of sub array
console.log(Object.hasOwnProperty("name"));//it will show that the property/key presentt in the object or not





