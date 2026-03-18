const promiseONE = new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log("Async executed successfully");
        resolve();
    }, 1000) 
}).then(function(){
    //console.log("promise completed successfully");
})

new Promise(function(resolve,reject){//'P'romise p capital
    setTimeout(() => {
        resolve({name:"sammy",password:"123"})
    },1000);
}).then((data)=>{
    //console.log(data);
    //console.log(data.name);
})


new Promise(function(resolve,reject){
    let error = false;
    if(!error){
        resolve({name:"sammy",password:"123"});
    }else{
        reject("Error occure!!");
    }
})

.then((data)=>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(()=>{
    console.log("Excution successfull!!");
    //this block of code is always executed;
})