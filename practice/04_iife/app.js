// Immediately Invoked Function Expressions (IIFE)

// Definition : Global scope ke polution se problem hoti hai kai baar
//  to us global scope ke jo decleration hai uski polution ko hatane k lie hum (iife) ka use krte hein


(function chai() {                           // ye named IIFE hai
    console.log(`DB connected`);
})();

(  () => {
    console.log(`DB CONNECTED TWO`);
} )();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('rophile');


































