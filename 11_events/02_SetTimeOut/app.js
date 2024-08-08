const sayRophile = function(){
    console.log("Rophile");
    
}

const changeText = function (){
    document.querySelector('h1')
    .innerHTML = "Changed Through JS"
}
const changeMe = setTimeout(changeText, 2000)


document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED");
    
})