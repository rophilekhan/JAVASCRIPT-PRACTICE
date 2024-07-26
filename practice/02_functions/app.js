// Topic Functions


function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("P");
    console.log("H");
    console.log("I");
    console.log("L");
    console.log("E");
}

// sayMyName()

function addTwoNumbers(number1 , number2) {     // (number1 , number2) isko bola jata hai paramenters
    console.log(number1 + number2);
}
// addTwoNumbers(3 , 4)    // (3 , null) isko bola jata hai arguments

function addTwoNumbers(number1 , number2) {     
    
    // let result= number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3 , 4)
// console.log("Result:", result);


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter your name");
        return
    }
    return `${username} Just Logged in`    
    
}
// console.log((loginUserMessage("rophile")));
// console.log((loginUserMessage()));


// functionme multiple value kese pass hote hein ye hote hein rest operater se or rest opertor ... y hota hai ishi ko spread bhi kehte he

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200 , 400, 500, 2000 ))

const user = {
    username: "rophile",
    price: "500"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)



const myNewArray = [200, 400, 100, 900 ]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));



