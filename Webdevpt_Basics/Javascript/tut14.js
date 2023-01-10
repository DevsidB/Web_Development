let element = document.getElementById("myfirst")
element = element.className
// element = element.childNodes
// element = element.parentNode
// element.style.color = "red"
// element.style.background = "black"
// element.innerText = "Text updated using innertext" //text updated
// element.innerHTML = "<b>Text made bold using innerHTML</b>" //text and element updated
// element.innerHTML = `<a href= "https://www.google.com/" >anchor tag using inner html</a>`
// console.log(element)
// console.log(element.innerHTML)
// console.log(element.innerText)

//1. single element selectors
let a = document.querySelector('#myfirst') //# means id (returns first entered id)
a = document.querySelector('.child') //  . means class (returns first entered class)
a = document.querySelector('h1') //  no prefix means a tag (returns entered first tag)
// console.log(a)
a.style.color = "Red"
a.style.background = "black"
a.innerText = "Custom Text modified with Html"

//2. multi element selectors
// let b = document.getElementsByClassName("child") // collection
// b = document.getElementsByClassName("child")[3] //element
// b=  document.getElementsByClassName("container") //collection
// b=  document.getElementsByClassName("container")[0] //element
b = document.getElementsByTagName("div") //collection
// b.style.color = "green"
// console.log(b)

//iterating the collection to make changes//forloops can also be used
Array.from(b).forEach(val => { //iterating all divs to change color from class container
    val.style.color= "cyan" 
    // console.log(val) //to print the iterations to console
});

c = document.getElementsByClassName("container")[0]
console.log(c)




