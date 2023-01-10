//searching by class name
// let ctitle = document.getElementsByClassName("card-title")[0]
// console.log(ctitle)
// ctitle.style.color = "red"

//searaching by ID
// let first_card = document.getElementById("firstcard")
// console.log(first_card)
// first_card.style.color = "red"

//searching class using query selector - Note : Do not forget to add '.' before class name in query selector
// let css_select = document.querySelectorAll(".card-title")
// console.log(css_select)

//searching id using query selector - Note : Do not forget to add '#' before ID name in query selector
// let css_select = document.querySelectorAll("#firstcard")
// console.log(css_select)

//changing styles using class queryselectorALL
let css_select = document.querySelectorAll(".card-title")
css_select[0].style.color = "blue"
css_select[1].style.color = "red"
css_select[2].style.color = "green"
// console.log(css_select)

//changing the style of single class with querySelector (class named 'sid' added to the button of 1st card)
document.querySelector('.sid').style.color = "cyan"
// document.querySelector('.card-title').style.color = "black" //only first instance selected

//searching by tag name
console.log(document.getElementsByTagName("a"))
//==========
//MATCHES == check if parents are same by CHILD ID AND PARENT CLASS 
someid = document.getElementById("card1")
console.log(someid)
console.log(someid.matches(".card"))