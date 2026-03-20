function user(username,loginCount,isLoggedIn){
    this.username = username //there this keyword make the new variable of same name 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const user1 = new user("sam",1,true)//here new keyword make the instance/object of the original data to make changes in the data 
const user2 = new user("sammmy",11,false)//important to iuse new keyword 
console.log(user.prototype);


console.log(user1.isLoggedIn);
