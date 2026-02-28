//singleton

//object literals
// object.creat called constructor
const mysym = Symbol("Key1")

const jsuser = {
    name:"gourav",
    "full name" : "gourav jain",
    [mysym]:"mykey1",
    age:23,
    location:"indore",
    islogin:false,
    email:"gjain@gmail.com"
};
// console.log(jsuser.email)
// console.log(jsuser["email"])//behind  variable is treated as string
// console.log(jsuser["full name"])//only can access by brackets[]
// console.log(jsuser[mysym])

jsuser.name = "Raj"//it change the name 
// Object.freeze(jsuser)   //after freezing the object cannot change the value inside object
jsuser.age = 32
// console.log(jsuser)

//to declare function in object
jsuser.greeting = function(){
    console.log("hello JS user");
}

jsuser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);//to access element from object use THIS
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());




