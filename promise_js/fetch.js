const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            console.log({name:"sammy",gmail:"xyz@gmail.com"});
        }else{
            reject("ERROR");
        }
    }, 1000);
})

async function consumepromisefive(){
    try{
        const promisee = await promisefive;
        console.log(promisee);
    }
    catch(error){
        console.log(error);
    }
}
consumepromisefive();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})







