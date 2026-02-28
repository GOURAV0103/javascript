let mydate = new Date()

// console.log(mydate)

// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

let mynewdate = new Date("01-02-2023")
// console.log(mynewdate.toDateString())

// +++++++++++++time stamp+++++++++++++++++++

let mytimestamp = Date.now()
// console.log(mytimestamp)

// console.log(mynewdate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
// console.log(newdate.getMonth()+1)
// console.log(newdate.getDay())
// console.log(newdate.getDate())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
newdate.toLocaleString('default',{
    weekday:"short"
})
console.log(newdate)