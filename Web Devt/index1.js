// let a = prompt ("what is your age?")
// a = Number.parseInt(a)
// if (a>10 && a <20){
//     console.log("Your age lies betweeen 10 and 20")
// }
// else {
//     console.log("Your age doesnt lies betweeen 10 and 20")
// }
//==============
// for (let i = 50; i<30;i++ ){
//     console.log(i)
// }
//===============
// const sum=()=>{
//     console.log("This is me")
//     return("this is returned text")
// }

// sum();

// let v = sum()
// console.log(v)

//================
// marks = {
//     sid: "80",
//     rahul: "25",
//     ajay: "34",
//     shanky: "90"
// }

// console.log(Object.keys(marks))
// console.log(marks["sid"])

//=====================loops with arrays

// num = [4,2,3,4,5,6,7,8,9]
// for (let i =0; i<num.length;i++) {
// console.log(i)
// }

// let b = num.forEach(sid => {
//     console.log(sid*sid)
// });

// console.log(b)

//================map
// const arr = [45,23,56,78]
// let a = arr.map((value)=>{
// console.log(value)
// return value+1
// })

// console.log(a)

//===foreach() vs map()

// num = [2,3,4,5,6,7,8,9]

//assigning variable to foreach is not possible => let b = foreach(). It applies function to each element and returns individual values.
// num.forEach(value => {
//     console.log(value*value)
// });

// console.log(b) //this is not possible

//map function can accept assigning a variable and returns a list. function is applied to whole array, and array is returned
// let a = num.map((value)=>{
//     return value*value
// })
// console.log(a)

//returns boolean list for specified condition
// let a = num.map((value)=>{
//     return value<6
// })
// console.log(a)

//=======================================filter 
// let a = num.filter((value)=>{
//     return value<6
// })
// console.log(a)

//============alert/prompt/confirm-- modals are used instead of alerts these days
// window.alert ("enter the value of a") //window is a global object. Can write wit /without it.
// let a = prompt("enter here:", "something entered")
// alert ("you entered a of type " + typeof a )
// let write = confirm(`The value you entered is ${a}. Do you want to write it to the page? `)
// if (write == true){
//     // a = Number.parseInt(a)
//     document.write(a)
// }
// else {
//     document.write(" Please allow me to enter the value!")
// }

//===========BOM/DOM
// console.table(window)
// console.log(document.body) //whole page converted into a javascript object is a document

//==========parent/child
console.log("hi!")
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild)
console.log(a.firstChild.nextSibling)





