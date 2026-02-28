function one(){
    const username = "sammy"
    function two(){
        const email = "sam@gmail.com"
        console.log(username)
    }
    two()
    // console.log(email);
}
// one()

if(true){
     const username = "sammy"
     if(username === "sammy"){
        const website = "instagram"
     }
    //  console.log(website);//throw error bcoz called outside the scope
}
// console.log(username);//same comdition

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(6))
function addone(num){
        return num+1
}

const addtwo = function(num){
    return num+2
}
console.log(addtwo(3));

