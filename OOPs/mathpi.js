const obj = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(obj);


// console.log(Math.PI);

const myNewObj = {
    name : "chai",
    price : 220,
    isAvailable : true,

    chai : function(){
        console.log("chai nahi bni!!");
    }
}
// console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));

//we can also set limitations on our created object

Object.defineProperty(myNewObj,"name",{
    writable : false,
    enumerable : false,
    configurable : false
})
console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));

for (const [key ,value]  of Object.entries(myNewObj)) {
    if(typeof value !== ("function")){
        console.log(`${key} : ${value}`);
    }
}
