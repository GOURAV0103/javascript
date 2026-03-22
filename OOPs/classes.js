class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptpassword(){
        return (`${this.password}123123`);
    }

    newuser(){
        return (`${this.username.toUpperCase()}`)
    }
}

const user1 = new user("sammy","xyz@gmail.com", "abc")
console.log(user1.encryptpassword());
console.log(user1.newuser());
//same ham object bnaky bhi kr skte hai