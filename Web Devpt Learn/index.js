// 1. Ways to print in javascript
// console.log("Hello There! ",4+6,"text 2") //prints in console
// console.warn("this is a warning") //prints a warning on a console with ! sign
// console.error("this is an error") //prints an error on a console with x sign
// document.write("this is a doc") //prints on the page
// alert ("this is an alert") //creates an external dialog box and prints          

// 2. Comments in javascript
/*this
is 
a 
multi
line
comment
*/

// 3. Javascript variables - not to use var (instead use let - es6 ecmascript update)
//numbers
var number1 = 2;
var number2 = 4;
console.log(number1 + number2)

//strings
var text1 = " this is a string"
var text2 = "this is a string 2"
console.log(text1, text2)

//booleans 
var a = true
var b = false
console.log(a, b)

// undefined and null
var c = undefined;
console.log(c); // both are same (variable maarked as undefined)
var d;
console.log(d); //both are same (variable declared but not marked anything)

var n = null;
console.log(n)

/*
Two types of data types in javascript:
primitive: numbers,strings, objects,booleans,undefined, null, symbol
reference: arrays,objects
*/

console.log(Symbol('this is a symbol'))

//objects
var marks = { sid: 45, rohan: 23, rahul: 25, }
console.log(marks)

// arrays
var arr = [1, 2, "text", 4, 5]
console.log(arr)
console.log(arr[0]) // prints the element at 0th index

//===================================//operators in javascript=====================================
//arithematic operators (OPERAND- 100 and 10 , operator- +,-,*,/)
var num1 = 100
var num2 = 10
console.log("The addition of two numbers is:  ", num1 + num2)
console.log("The subtraction of two numbers is:  ", num1 - num2)
console.log("The multipl of two numbers is:  ", num1 * num2)
console.log("The divide of two numbers is:  ", num1 / num2)

//Assignment operators 
var a = 100
var b = 10
var c = b
console.log(c)

c += b
console.log(c)

c -= 2
console.log(c)

c *= 2
console.log(c)

c /= 2
console.log(c)

//comparison operator
var x = 10
var y = 20
console.log(x == y)
console.log(x <= y)
console.log(x >= y)
console.log(x != y)
console.log(" End of comparison operators")

//logical operators
//logial AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
//LOGICAL OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
//LOGICAL NOT
console.log(!true)
console.log(!false)

//=================================FUNCTIONS IN JAVASCRIPT (DRY PRINCIPLE)=================================
//method1:
// function avg(a, b) {
//     return (a + b) / 2;
// }

// c = avg(2, 3)
// console.log(c)

//method2:
avg = (a,b) =>{
    return (a+b)/2;
}

//=================================CONDITIONAL STATEMENTS=================================
//single if
var age = 4
if (age > 18) {
    console.log("You are not a kid ")
}

// if-else
if (age <= 18) {
    console.log("You are a kid")
}
else if (age <= 40) {
    console.log("You are young")
}
else if (age <= 60) {
    console.log("You are middle aged")
}
else {
    console.log("you are old")
}

//for loop : Method1 
var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr[0])  //just for checking

// for (var i = 0; i<arr.length;i++){
//     console.log(arr[i])    
// }

//for loop : Method2
// arr.forEach(function (element) {
//     console.log(element)
// });

// some concepts
let j = 0; //let is a block level scope inside curly brackets that helps in memory management
// const a = 0; //value of constant cannot be changed at any cost
// console.log(a++) //error will be thrown 

// while loop
// let i = 0; 
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// do - while loop - code inside do is executed atleast once even before the condition is checked in while statemrnt
// do {
//     console.log(arr[i]);
//     i++;
// }
// while
//     (i < arr.length);
//=================================BREAK/CONTINUE=================================

// Break statement
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) { break }
//     console.log(arr[i])
// }

// continue statement
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) { continue }
//     console.log(arr[i])
// }

//=================================ARRAY METHODS=================================
let myarr = ["fan",32,null,true];
//array methods
console.log(myarr.length)

//pop - remove last item from list
myarr.pop();
console.log(myarr)

//push - adds item to list at the end
myarr.push("sid")
console.log(myarr)

//shift - removes first item from list
myarr.shift();
console.log(myarr)

//unshift - adds item to list at the beginning
myarr.unshift("rahul")
console.log(myarr)
console.log(myarr.unshift("rahul")) //returns length

//convert array to string
console.log(myarr.toString())

//sort array
console.log(myarr.sort())

d= [4,78,123,789,231,94]
console.log(d.sort()) //sorts alphabetically

//=================================String METHODS=================================

mystring = "This is a developers developers pc"
console.log(mystring.length)

//index of - returns the index of first instance of string.
console.log(mystring.indexOf("developers"))
console.log(mystring.lastIndexOf("developers"))

//slice a string
console.log(mystring.slice(0,4))

//replace a string
console.log(mystring.replace("developers","siddh's"))

//printing a date 
mydate = new Date();
console.log(mydate)
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay()); //sunday-0,monday-1,tuesday-2
console.log(mydate.getHours()); 

//=================================DOM (DOCUMENT OBJECT MODEL) MANIPULATION=================================
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container')
console.log(elemClass);
// elemClass[0].style.background = 'yellow'
elemClass[0].classList.add('bg-primary') //adding classes
elemClass[0].classList.add('text-success') //adding classes

console.log(elem.innerHTML); //prints html 
console.log(elem.innerText); //prints text inside html
console.log(elemClass[0].innerHTML); //prints html at 0th index
console.log(elemClass[0].innerText); //prints text inside html at 0th index

tn = document.getElementsByTagName('div')
console.log(tn)

//Creating a child element inside any div
createdelement = document.createElement('p')
createdelement.innerText= "This is a child element created using p"
tn[0].appendChild(createdelement)

createdelement2 = document.createElement('h1')
createdelement2.innerText= "This is a child element created using h1"
tn[0].appendChild(createdelement2)

//replacing a child element with another element
createdelement3 = document.createElement('h1')
createdelement3.innerText= "This is a child element to be replaced "
tn[0].appendChild(createdelement3)

createdelement4 = document.createElement('b')
createdelement4.innerText= "This is a child element which replaced createdelement3"
tn[0].replaceChild(createdelement4,createdelement3)

// removeChild(createdelement2)
//some important properties of document in console commands
document.title
document.location
document.URL
document.scripts
document.links
document.images
document.domain

//selecting using query
sel = document.querySelector('.container')// only one container selected
console.log(sel)

sel = document.querySelectorAll('.container') //all containers selected
console.log(sel)

function clicked (){
    console.log("The button was clicked")
}

//=======================================events in javascript=====================================

// firstcontainer.addEventListener('click', function(){
//     console.log('Container was clicked')
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log('Mouse was on container')
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log('Mouse placed outside')
// })

// firstcontainer.addEventListener('mouseup', function(){
//     console.log('Mouse released')
// })

// firstcontainer.addEventListener('mousedown', function(){
//     console.log('Mouse pressed')
// })

//Changing texts based on events

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>This text was changed by an event </b>"
//     console.log('Container was clicked')
// })

//events based on mouse down and up

let prevhtml = document.querySelectorAll('.container')[1].innerHTML
firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevhtml
    console.log('mouse released')
})

firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>This text was changed by an event </b>"
    console.log('mouse pressed')
})


//===================================//SetTimeout and SetInterval functions==============================
sid_time = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set_timeout fired </b>"
    console.log("This text was printed after some seconds on console")
}
// setTimeout(sid_time, 10000) //runs for 10 sec and stops
// clr1 =  setTimeout(sid_time,10000) //to stop write <clearInterval(clr1)> on console (do not run above line with this line)

// setInterval(sid_time,2000) // keeps running every 2 secs
// clr2 =  setInterval(sid_time,2000) //to stop write <clearInterval(clr2)> on console (do not run above line with this line)

//==========================================local storage- Saving items===================================
localStorage.setItem('name','Sid')
// localStorage
// localStorage.clear() //clears the local storage
// localStorage.getItem('name')
// localStorage.removeItem('name')

//==========================================JSON===============================================
obj = {"name":"sid", "job role": "programmer", "projects":"web development"}
jso = JSON.stringify(obj)
console.log(jso)
typeof(obj) //returns object
typeof(jso)  //returns string

parsed = JSON.parse(`{"name":"sid", "job role": "programmer", "projects":"web development"}`)
console.log(parsed)




