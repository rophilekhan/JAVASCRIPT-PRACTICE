// // var


// // var num1 = 3;
// // var num2 = 6;
// // console.log(num1 + num2);

// // var userName = 'rophile khan'
// // console.log(userName);


// // alert 


// // alert("hey dude how are you")

// // var num1 = 5;
// // var num2 = 7;
// // var result = num1 + num2;

// // alert(result);



// // prompt


// // var userName = prompt ('Enter your Name');
// // console.log(userName);


// // var num1 = 10;        //assign
// // num1 = num1 + 20;     //reAssign
// // console.log(num1);



// // comperition method

// // console.log(10 > 5);
// // console.log(10 < 5);
// // console.log(10 <= 5);
// // console.log(10 <= 5);
// // console.log(10 == 10);
// // console.log(10 == 10);
// // console.log(10 == '10');
// // console.log(10 === '10');



// // var num1 = prompt ('Enter first number');
// // var num2 = prompt ('Enter second number');
// // console.log(num1 > num2);

// //   != data type check nahi kr raha hai
// // console.log(10 != 10);
// // console.log(10 != 5);

// //  !== data type check krege

// // console.log(10 !== '10');



// // revision
// // topic var and const

// // const change nahi hota or var change hojata hai

// // const accountId = 3245689
// // let accountEmail = "rophile.khan@gmail.com"
// // var accountpassword = "12345"
// // accountCity = "karachi"
// // let accountState;

// // // accountId = 2  not  allowed const change nhi hota hai
// // accountEmail = "hc@gmail.com"  // let bhi chnage hojata hai
// // accountpassword = "25648"      // var bhi chnage hojata hai
// // accountCity = "lahore"         // Direct bhi chnage hojata hai

// // console.log(accountId);

// // console.table([accountId, accountEmail, accountpassword, accountCity, accountState])
// //  // console.table ([]) is ke through ap direct sab console kara skte ho


//  /*
//  prefer not to use var 
//  because of issue in block scope and functional scope
//  const or let use krna hai var use nahi krna
//  */



// // Topic data types

// // let name = "rophile" // ye string data type hai
// // let age = 19  // ye number data type hai
// // let isLoggedIn = false  // ye boolean data type hai
   


// // numbers => 2 to power 53
// // BigInt
// // string = ""
// // Boolean => true/false
// // null => Standalone value
// // undefined =>
// // symbol => unique 

// // object 

// // console.log(typeof undefined); answer undefined
// // console.log(typeof null );     answer object


// // topic operations 


// // let value = 3
// // let negValue = -value
// // console.log(negValue);

// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*6);
// // console.log(2/2);
// // console.log(2**3); ye square hai


// // let str1 = "hello"
// // let str2 = " rophile"
// // let str3 = str1 + str2
// // console.log(str3);

// // console.log(1 + "2");
// // console.log("2" + 1);
// // console.log("5" + "4");
// // console.log("1" + 2 + 2 );
// // console.log(1 + 2 + "2" );

// // console.log(true);
// // console.log(+true);
// // console.log(+"");

// // let num1, num2, num3

// //  num1 = num2 = num3 = 2 + 2

// // let gameCounter = 100
// // gameCounter++;
// // console.log(gameCounter);





// // topic date 

// // let myDate =new Date()
// // console.log(myDate);



// //   topic array


// // const myArr = [0, 1, 2, 3, 4, 5]
// // const fruits= ['apple', 'banana', 'guava', 'melon', 'grapes']
// // const myArr2 = new Array (1, 2, 3, 4)
// // console.log(myArr[3]);


// // Array methods

// // fruits.push(6)  
// // // console.log(fruits);
// //  // isme apple', 'banana', 'guava', 'melon', 'grapes' iske aagey push me jo value di hai woh add horhi hai


// //  fruits.pop()  
// // // console.log(fruits);  
// // // ye end me remove krdeti hai


// // fruits.unshift(44)
// // // console.log(fruits);
// // // unshift me jo value di hai woh aegi uske baad array show hogi



// // // myArr.shift()
// // console.log(myArr);
// // // isme hoga y k agar array k start me zero hoga to y remove kr k 1 se start krega


// // // const newArr = myArr.join()
// // // console.log(typeof newArr);



// // slice and splice

// // slice: original array ko manipulate krta hai yani ap jo 
// // slice me likhoge us se phele wala show krega or original array ko khrab nahi krega


// // splice: original array ko manipulate nahi krta hai yaani ap jo splice
// // mein likhoge woh range tk original array me se hat dega or result me jo range apne dali hai woh show krta hai


// // console.log("A", myArr);

// // const myn1 = myArr.slice(1, 3)

// // console.log(myn1);
// // console.log("B", myArr);

// // const myn2 = myArr.splice(1, 3)
// // console.log("C", myArr);
// // console.log(myn2);




//  const fruits= ['apple', 'banana', 'guava', 'melon', 'grapes']
//  const heros= ["superman", "ironman", "spiderman", "flash", "thor"]

// //  fruits.push(heros)

// //  console.log(fruits);
// //  console.log(fruits[5]);

// // concat method
// const mixture = fruits.concat(heros)
// // console.log(mixture);

// // spread method
// const newMixture = [...fruits, ...heros]
// // console.log(newMixture);


// // Note!  Spread or concat method eik jese hai yani arrays ko mila dete hein but
// //  spread is lie acha hai y 2 se ziada arrays ko bhi mila
// //  deta hai isko use krna k tariqa y h ke is me [ ke ubder array se phele 3 Dot. dalte hein]


// // from and of method

// // from method

// // console.log(Array.isArray("rophile"));
// // console.log(Array.from("rophile"));
// // console.log(Array.from({name: "rophile"})); // result me y empty array dega bht interesting case hai.


// // of method

// let score1 = 100
// let score2 = 200
// let score3 = 300

// // console.log(Array.of(score1, score2, score3));

