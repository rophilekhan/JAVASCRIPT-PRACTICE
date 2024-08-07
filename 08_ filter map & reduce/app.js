

// for each value return nahi krta hai

//const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
// console.log(item);
// return item

// } )

// console.log(values);




// ===========================================================




const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const neyNums = myNums.filter( (num) => num > 4 )
// console.log(neyNums);
 
// is trah bhi likh skte hein mgr isme return likhna lazmi hai wrna y smjhta hai new scope hai
 
// const neyNums = myNums.filter( (num) => {
//     return num > 4
// } )

//=======================================================================================================

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);





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

// let userBooks = books.filter( (bk) => bk.genre === 'History' )

//  userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History" )
// console.log(userBooks);

//=====================================================================================================


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {
// return num + 10
// } )
// console.log(newNums);



// ///////////////////chaining method ==============================

const newNums = myNumbers
                        .map( (num) => num * 10 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40 )

// console.log(newNums);





// ======================== reduce ================================



const myNumbs = [1, 2, 3]

// const myTotal = myNumbs.reduce( function (accumulator , currentValue) {
//     console.log(`accumulator ${accumulator} and currennt Value ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0 )

const myTotal = myNumbs.reduce( (accumulator, currentValue) => accumulator+currentValue, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemNamw: "Js course",
        price: "2999"
    },
    {
        itemNamw: "MObile dev course",
        price: "5999"
    },
    {
        itemNamw: "data science course",
        price: "12999"
    },
    {
        itemNamw: "python course",
        price: "999"
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);









