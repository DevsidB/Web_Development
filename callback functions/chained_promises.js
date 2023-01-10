// Timeout set for p1 2sec
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("p1 console timeout 2 sec. Prints without then function")
//         resolve("p1 resolve timeout 2 sec.Prints when then is called")
//     }, 2000);
// })

// p1.then((value) => {
//     console.log("kuch bhi! ")
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         resolve("p2 resolve inside then function.prints only when 1. then is called and 2. return p2 is mentioned after this function ")
//         console.log("p2 console direct. Prints without then function")
//     })
//     return p2
//     // return ("Return wala line")
// }).then((value)=>{
//     console.log(value)
// })

//timeout set for p1 2sec and p2 5sec
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("p1 console timeout 2 sec. Prints without then function")
//         resolve("p1 resolve timeout 2 sec.Prints when then is called")
//     }, 2000);
// })

// p1.then((value) => {
//     console.log("kuch bhi! ")
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p2 resolve inside then function.prints only when 1. then is called and 2. return p2 is mentioned after this function ")
//             console.log("p2 console direct. Prints without then function")
//         }, 5000);
//     })
//     return p2
//     // return ("Return wala line")
// }).then((value) => {
//     console.log(value)
//     return 2
// }).then((value)=>{
//     console.log (value)
//     console.log("End of Code")
// })

// version 2
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p1 console timeout 2 sec. Prints without then function")
        resolve("p1 resolve timeout 2 sec.Prints when then is called")
    }, 2000);
})

p1.then((value) => {
    console.log("kuch bhi! ")
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 resolve inside then function.prints only when 1. then is called and 2. return p2 is mentioned after this function ")
            console.log("p2 console direct. Prints without then function")
        }, 5000);
    })
    // return ("Return wala line")
}).then((value) => {
    console.log(value)
    return 2
}).then((value)=>{
    console.log (value)
    console.log("End of Code")
})