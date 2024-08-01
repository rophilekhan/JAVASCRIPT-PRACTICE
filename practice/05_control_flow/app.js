// If statement



// if (false) {                          // agar if me false hai to code execute nahi hoga
    
// }

// if (true) {                          // agar if me true hai to code execute hoga
    
// }


// comparision method

/*
 < less than
> greater than
<= greter than or equal to
> less than or equal to
== equal to
!= not equal to
===  type bhi check krta hai 
!== y negative me strick checking krta hai */



const isUserLoggedIn = true
const temperature = 41


// if (temperature < 50 ) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");




// if (temperature === 30 ) {
//     console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }

// console.log("Excecute");





// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);




// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750 ) {
//     console.log("less than 750");
// }else if (balance < 900 ) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     // console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");
// }





// =============================== Switch Case Statement ===========================

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("january");
//         break;
//     case "feb":
//         console.log("february");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "apriL":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }



// =============================== Truthy Or Falsy ===========================


// falsy values:

// false
// 0
// -0
// BigInt 0n 
// ""
// null
// undefined
// NaN



// truthy value:

// "0"
// 'false'
// " "
// []
// {}
// function(){} 






// const userEmail = "r@rophile.ai"


// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("dont have user email");
// }


const userEmail = []


// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("dont have user email");
// }





// if (userEmail) {
//     console.log("Array is empty");
// }



// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("obj is empty");
// }





// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

//  console.log(val1);








// terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");









