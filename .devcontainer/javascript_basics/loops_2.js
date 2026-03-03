const mynums = [1,2,3,4,5,6,7,8,9,10]

let numbs = mynums.filter( (num) => num > 4)

let numb = mynums.filter( (num) => {
   return num > 4
})//if add scope {} then u have to add return keyword

// console.log(numb);

const newnumbs = []
mynums.forEach( (num) => {
    if (num > 4) {
        newnumbs.push(num)
    }
} )

// console.log(newnumbs);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbook = books.filter( (bks) => bks.genre==="Fiction" && bks.edition >= 2000)
// console.log(userbook);

const number = [1,2,3,4,5,6,78,8,9]
const new1 = number.map( (num) => num+10 )
// console.log(new1);


//chaining means using methods multiple times

const newnumb = number
                .map( (num) => num*10 )
                .map( (num) => num+5 )
                .filter( (num) => num>30 )
// console.log(newnumb);

//REDUCE Method
const mynumber = [1,2,3,4]

const mytotal = mynumber.reduce(function (acc , CurrentValue){
    // console.log(`acc: ${acc} and currentValue ${CurrentValue}`);
    
    return acc + CurrentValue
}, 0/*accumulator requres initial value */)


// console.log(mynumber.reduce( (acc,currval) => acc+currval), 0);
// console.log(mytotal);

const courses = [
    {
        CourseName : "python",
        price : 1999
    },
    {
        CourseName : "Ruby",
        price : 999
    },
    {
        CourseName : "javascript",
        price : 2999
    },
    {
        CourseName : "flutter",
        price : 4999
    },
]

const Totalprice = courses.reduce( (acc,items) => (acc + items.price),0)
console.log(Totalprice);









