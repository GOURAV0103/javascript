class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
    }

    static createID(){//static keyword hr us object ko access nahi deta jo es class se instanciate hua hai
        return `123`
    }

}
const user1 = new user("sam")
// console.log(user1.createID())


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const user2 = new teacher("phone", "i@gmail.com")
user2.logMe()
console.log(user2.createID());
