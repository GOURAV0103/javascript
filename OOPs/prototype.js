// let name  = "sammy   "
// console.log(name.trim().length);

let myarr = ["thor" , "spiderman"]
const arr = {
    thor : "hammer",
    spiderman : "sling",

    getpower : function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

//injecting prototype from developer side
Object.prototype.sam = function(){
    console.log(`sam is preseent in all object`);
}

Array.prototype.heysam = function(){
    console.log(`sam says hey`);
}

// myarr.heysam()
// myarr.sam()

//inheritance

const user = {
    name : 'sam',
    email : "xyz@gmail.com"
}

const teacher = {
    makeVideo : true 
}


const teachingSupport = {
    isAvailable : false 
}

const TASupport = {
    makeAssignment : ' js assignment',
    FullTime  : true,

    __proto__  : teachingSupport //property to inherite another object 
}

teacher.__proto__ = user //can also inherite outside the object also

//New syntax
// setPrototypeOf user krte hai property inherite krne ky liye 
//object.setProptotypeOf(kisko_krne _h , kiski_krne _h)
Object.setPrototypeOf(teachingSupport , teacher)

let anotherUSername = "ChiaAurCode   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    
    console.log(`true length is : ${this.trim().length}`);
}

anotherUSername.truelength()
"Sammy".truelength()//this property current context ko refer krte hai
'medicaps'.truelength()


