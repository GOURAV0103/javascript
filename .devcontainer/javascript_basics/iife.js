//IFFE: Immediately Invoked Function Expressions

(function chai(){//NAMED IIFE bcoz function have some name here chai()
    console.log(`DB CONNECTED`);
})();

//frst () for function definition and scnd () is for execution call
//global scope ky pollution ko htane iife ka use kiya
//semicolon compulsory
(
    (name)/*function*/ => {//simple IIFE without name
        console.log(`DB CONNECTED TWO ${name}`)
    }
)("sammy")