// for of loop

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greeting = "Hello world!"
for (const greet  of greeting) {
    if(greet === " "){
        continue
    }
    //console.log(`Each character is ${greet}`);
}

//MAPs
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('Fr',"France")

// console.log(map);

//applying loop
//add quare brackets [] for only keys in the variable
for (const [key,value] of map) {
    // console.log(key,":-",value);
}

const myobj = {
    "game1": "gta1",
    "game2": "NFS"
}

// for (const [key,value] of myobj) {
//     // console.log(key,":-",value);
// }

//ForOF loop is not applicable on objects


//OBJECST

const myobject = {
    "js": "javascript",
    "cpp":"c++",
    "rb":"Ruby",
    "swift":"swift by apple"
}
//here we use forIn loop for objects 


// for (const key in myobject) {
//     // console.log(key);
//     console.log(`${key} shortcut is for ${myobject[key]}`);
    
// }

const  arry = ["js","cpp","rupy","python","java"]
for (const key in arry) {
//    console.log(key);
//    console.log(arry[key])
}

//loop forIn in map
// for (const key in map) {
//     console.log(key);
// }

//ForEach loop

const coding = ["js","cpp","rupy","python","java"]

coding.forEach( function (item/*any name*/) {
    // console.log(item);
} )//no name for call back function

coding.forEach( (val) => {
    // console.log(val);
} )


function printme(item){
    // console.log(item);   
}
coding.forEach(printme)//simply pass parameter

coding.forEach( (item,arr,index) => {
    // console.log(item,arr,index);
} )

const Mycoding = [
    {
        lang:"javascript",
        langFileName:"js"
    },
    {
        lang:"java",
        langFileName:"java"
    },
    {
        lang:"python",
        langFileName:"py"
    }
]

Mycoding.forEach( (item) => {
    console.log(item.lang);
} )