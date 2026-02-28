//Function

function myfun(){
    console.log("G")
    console.log("o")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("v")    
}

// myfun()

// function newfun(num1,num2){
//     console.log(num1+num2);
// }


// function newfun(num1,num2){
//     let result = num1+num2;
//     return result;
//     //return m result(return mai) likhne ky baad bali line of code kbhi excute nahi honge
// }

function newfun(num1,num2){
    return num1+num2;
}


// newfun(4,5)
const result = newfun(4,5) 
//console.log("Result: ",result);

function userlogin(username = "sam"){//default value  to remove undefined username
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just loggedIn`
}

// console.log(userlogin("Sammy"))
// console.log(userlogin())

function addtocartPrice(...num1){//here ... means rest operator
    return num1
}
// console.log(addtocartPrice(200,300,500,100,500));

function addtocartPrice_2(val1,val2,...num1){//here ... means rest operator
    return num1
}
// console.log(addtocartPrice_2(200,300,500,100,500));

//to pass object in function
const user = {
    name :"sammy",
    age : 23,
    gmail: "sam@gmail.com"
}

function objectHandler(userobject){
    console.log(`Usernanme is ${userobject.name} and age is ${userobject.age}`);
}
objectHandler({
    name:"gourav",
    age:22
})


