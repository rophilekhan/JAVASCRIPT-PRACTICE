const promiseOne = new Promise(function(resolve, reject) {
        // do an saunc task
        //  DB calss, crypto, network
        setTimeout(function(){
            console.log('async task is complete');
            resolve()
        },1000)
})

promiseOne.then(function () {
    console.log('promise consumed');
    
})


new Promise (function(resolve, reject){
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('Async to resolve');
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function () {
    resolve({username: 'Rophile', email: 'rophile.khan@gmail.com'})
    },1000)   
})

promiseThree.then(function (user) {
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ruffy", password: "abc123"})
        } else{
            reject('ERROR: Something went Wrong')
        }
    },2000)
})
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log('the promise is either reolved or rejected'))



const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "Javascript", pasword: "123"}
    )} else {
        reject('ERROR: JS went wrong')
    }
    },1000)
})

async function consumeP5() {
    try{
        const respone = await promiseFive
    console.log(respone);
    } catch (error) {
        console.log(error);
    }
    
}

consumeP5()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//     console.log("E", error);
        
//     }
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((result)=>{
    return result.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

