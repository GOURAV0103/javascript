//function based syntax
function user(email,password){
    this._email = email,
    this._password = password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new user("chia@ch.ai","123abc")
// console.log(chai.email);
// console.log(chai.password);



//object based getter setter method

const user1 = {
    _email : 'chia@ch.ai',
    password : "123abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//USING FACTORY FUNCTION
//default Null
const tea = Object.create(user1)

console.log(tea.email);















