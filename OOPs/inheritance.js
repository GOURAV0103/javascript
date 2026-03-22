class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class teacher extends user{//extend keyword extend the data of user class
    constructor(username,email,password){
        super(username)//yeh super keyword automatically {this} (behind the scene) ko call kr leta hai or extended class m jake useername ko set krke excess le aata hai
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai","chai@gmail.com","123")
chai.logMe()

const masalachai = new user("masalaChai")
masalachai.logMe()

console.log(chai instanceof teacher);
