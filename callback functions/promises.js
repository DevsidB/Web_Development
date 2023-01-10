//remember:  use resolve with then ; use reject with catch only
//promises are used to execute the code in parallel manner.
//resolve and reject are inbuilt functions inside JS

const delay_t = 5000 
let p1 = new Promise((resolve, reject) => {
    console.log("promise p1 is pending")
    setTimeout(() => {
        resolve("Success")
    }, delay_t)
})
let p2 = new Promise((resolve, reject) => {
    console.log("promise p2 is pending")
    setTimeout(() => {
        reject(new Error("promise p2 wala error aya hai"))
    }, delay_t)
})

// let p2 =new Promise((resolve,reject)=>{ //using error with resolve doesnt actually throw an error in console.
//     console.log("promise is pending")
//     setTimeout(()=>{
//         resolve(new Error("promise p2 wala error aya hai"))
//     },5000)
// })
//==============

p1.then((value)=>{ //then is used with resolve(when task is completed)
    console.log(value)
})

// p1.then(alert);

// p2.catch(() => { //catch is used with reject(to handle errors)
//     console.log("Some error occured in p2")
// })

// resolve with then and error => line prints
// reject with then and error => new Error(line is printed) with red error
// p2.then((value)=>{ 
//     console.log("Some error occured in p2")
// })

//Value and errors in one syntax:(using then,)
p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})