class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    
    //getter setter bnate time jis property ka bnana hai uska hi naam lema pdega important hai
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        //setter ko return nahi krte
        this._email = value
    }


    get password(){
        return `${this._password}qwe`
    }
    set password(value){
        //dodo jagha password ki value set ho rhi hai isly stack size exceed ho rhi hai 
        //error htane ky liye name m thoda change kr denge setter or getter dono mai.{password = _password}
        this._password = value
    }

}
const user1 = new user("g@gourav.in","jain")

console.log(user1.password);
console.log(user1.email);

