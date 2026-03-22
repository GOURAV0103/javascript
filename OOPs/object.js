function multiply5(num){
    return num*5;
}

multiply5.power=2;

// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);//function can be a function and object both

function createuser(username,score){
    this.username = username;
    this.score =  score ;
}

createuser.prototype.increment = function(){
    this.score++;
    console.log(this.score);
}

createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user1 = new createuser("sam",23)
const user2 = new createuser("sammy",27)

// user1.increment()
user1.printMe()
user2.printMe()


