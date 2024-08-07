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


// const map = new Map()
// map.set('PK', "pakistan" )
// map.set('DB', "Dubai" )
// map.set('IN', "India" )


// console.log(map);

// for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
// }


const myObject = {
  'game1' : "NFS",
  'game2' : "GTA"
}

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value );
// }           not working obj in forof becaus its not itertable


// for in loop================================== 

const MyObj = {
  js : 'javascript',
  cpp : 'c++',
  rb : 'rubby',
  swift : 'swift by apple'
}

for (const key in MyObj) {
//  console.log(`${key} shortcut is for ${MyObj[key]}`);
}




const programming = ["js", "css", "cpp", "html", "py"]

for (const key in programming) {
//  console.log(programming[key]);
}



// const map = new Map()
// map.set('PK', "pakistan" )
// map.set('DB', "Dubai" )
// map.set('IN', "India" )

// for (const key in map) {
//   console.log(key);
  
// }     map is not iteratable so its not showing anything 
 




// ======================== most important loop  for each loop ==================================

const coding = ["js", "ruby", "java", "C++", "python" ]

// coding.forEach( function (item) {
//   console.log(item);
// } )





// coding.forEach( (item) => {
//   console.log(item);
  
// } )





// function printMe(item) {
//   console.log(item);
  
// }

// coding.forEach(printMe)




// coding.forEach( (item, index, arr) => {
// console.log(item, index , arr);

// } )



const myCoding= [
  {
    languageName : "javascript",
    languageFileName : "Js"
  },
  {
    languageName : "java",
    languageFileName : "java"
  },
  {
    languageName : "phython",
    languageFileName : "py"
  },
 ]


myCoding.forEach( (item) => {
 // console.log(item.languageName);
  
} )



























