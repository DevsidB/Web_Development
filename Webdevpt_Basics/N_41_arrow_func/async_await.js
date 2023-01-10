// function sid() {
//     return "Hello this is me"
// }
// console.log(sid())


// normal function- this returns text
// function sid() {
//     return "Hello this is me-normal function"
// }
// console.log(sid())


//async function- this returns a promise
// async function sid() {
//     return "Hello this is me- with async"
// }
// console.log(sid())

//=============
//async function- some more experimentation
// async function sid() {
//     console.log("I print when function is defined as variable in let ")
//     return "I print when function is called in console.log. If the function is async I return as a promise"
// }

// console.log("before calling sid")
// let a = sid()
// console.log("after calling sid")
// console.log(a)
// console.log("last line of code")
//==================

//async function- using fetch api which is also a promise. Saves from using two .then's
async function sid() {
    console.log("I print when function is defined as variable in let ")
    const response = await fetch ("https://api.github.com/users")
    console.log("before response") 
    const users = await response.json()
    console.log("after response. Users Resolved") 
    return users
    // return "I print when function is called in console.log. If the function is async I return as a promise"
}

console.log("before calling sid")
let a = sid()
console.log("after calling sid")
console.log(a)
a.then(data => console.log(data))
console.log("last line of code")




