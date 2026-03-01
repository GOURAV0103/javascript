const user = {
    name : "sammy",
    price : 999,

    Welcome: function () {
        console.log(`${this.name}, welcome to website`);//here this keyword shows a current context within the scope
        console.log(this);
    }
}

// user.Welcome()
// user.name = "sam"
// user.Welcome()//changing current context //context means basically changing  the valuee

// console.log(this);

// function one(){
//     let username = "sammy"
//     console.log(this.username);
// }

// one()

//Arrow function

const chai  = () => {//remove function keyword and add arrow 
    let username = "sam"
    console.log(this.username);
}

// chai()

// const addtwo = (num1,num2) =>  num1+num2;//

// const addtwo = (num1,num2) =>  (num1+num2);//curly brackets m insert kiya toh return likhna pdega  parenthesis m insert kioya toh return nahi likhna pdega

const addtwo = (num1,num2) =>  ({username:"sammy"})//to retuen object in arrow function insert them into small brackets
console.log(addtwo(2,3))

// const myarr = [22,3,45,75,45] 





