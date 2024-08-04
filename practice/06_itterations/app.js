// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
      //  console.log("5 is best number");
    }
//    console.log(element);

}

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


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue

    }
    console.log(index);
    
}