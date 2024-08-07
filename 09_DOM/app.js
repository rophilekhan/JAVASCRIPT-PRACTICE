const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);


// for (let i = 0; i < parent.children.length; i++) {
//  console.log(parent.children[i].innerHTML);
    
// }


//  parent.children[1].style.color = "orange"
//  console.log(parent.firstElementChild);
//  console.log(parent.lastElementChild);



const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);



// console.log("NODES:", parent.childNodes);




function adLanguage(langName) {
   const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
adLanguage("python")
adLanguage("typescript")


function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('golang')


// edit values

    const secondLang = document.querySelector("li:nth-child(2)")
    const newLi = document.createElement('li')
    newLi.textContent = "mojo"
    secondLang.replaceWith(newLi)



    const firstLang = document.querySelector('li:first-child')
    firstLang.outerHTML = '<li>TypeScript</li>'




// remove Element

const lastLang = document.querySelector('li:last-child')
lastLang.remove()
 



















