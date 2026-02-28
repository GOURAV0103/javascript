const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


//const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

//it merge all array list into a single list
// const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros)

const another_arr = [1,2,3,[4,5,6],7,[8,9,1,[44,55]]]

const real_arr = another_arr.flat(Infinity)
// console.log(real_arr)

console.log(Array.isArray("gourav"))
console.log(Array.from("GOURAV"))

console.log(Array.from({name:"Gourav"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1,score2,score3,score4))//use .of instead of .from working of both is same

