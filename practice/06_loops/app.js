// // for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//       //  console.log("5 is best number");
//    }
//   console.log(element);

// }

// for (let i = 2; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//    // console.log(`inner loop value ${j} amd inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
    
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break

//     }
//     console.log(index);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         continue

//     }
//     console.log(index);
    
// }




// while or do while loop



// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }


// let myArray = ['flash', 'superman', 'batman']

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }




// let score = 1

// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);




// ===========================    for of loop    =========================================




const arr = [1, 2, 3, 4, 5]


for (const element of arr) {
  //  console.log(element);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Each Character is ${greet}`);
    
}



// ==================== maps ======================


const map = new Map()
map.set('PK', "pakistan" )
map.set('DB', "Dubai" )
map.set('IN', "India" )

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}
















