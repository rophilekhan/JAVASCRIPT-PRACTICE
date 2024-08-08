// document.getElementById('owl').onclick = function () {
//     alert('owl clicked')
// }


//type
// timestamp
// defaultPrevented
// target
// srcElement
//currentTarget
// clientX
//  clientY
//   screenX
//    screenY
// altkey
//  ctrlkey
//   shiftkey
//    keyCode

//  document.getElementById('images').addEventListener('click', function(e){
//         console.log("clicked inside the ul");
//     }, false)

// document.getElementById('owl').addEventListener('click', function (e) {
//    console.log(e);

// }, false)


// document.getElementById('google').addEventListener('click', function(e){
//    e.preventDefault()
//    e.stopPropagation()
//    console.log("google clicked");
// }, false)





// project click on image and it will remove


document.querySelector('#images').addEventListener('click', function(e){
   console.log(e.target.parentNode.tagName);
   if (e.target.tagName === 'IMG') {
      console.log(e.target.id);
      let removeIt = e.target.parentNode
      removeIt.remove()      
   }

}, false)





































