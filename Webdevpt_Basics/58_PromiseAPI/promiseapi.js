let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p1 logs")
        // resolve("p1") //toggle-1
        reject(new Error("p1 I placed an error here")) //toggle-1
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p2 logs")
        // resolve("p2")
        reject(new Error("p2 I placed an error here"))
    }, 3000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p3 logs")
        resolve("p3")
        // reject(new Error("p3 I placed an error here"))
    }, 4000);
})

//This method executes all the promises individually and returns the output when each of them is executed.
// p1.then((value)=> {
//     console.log(value)
//     return 3 //called as a value in next then
// })
// .then((value)=>{
//     console.log(value)
// })

// p2.then((value)=> {
//     console.log(value)
// })

// p3.then((value)=> {
//     console.log(value)
// })
//==================
//6 promise methods
//this method waits for all promises to execute, and returns the combined array of their messages.

// promise.all works only when no error is encountered
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

//promise.allsettled works even when error is encountered
// let promise_allsettled = Promise.allSettled([p1,p2,p3])
// promise_allsettled.then((something)=>{
//     console.log(something)
// })

//promise.race prints the fastest- but if error encountered in fastest value- error is thrown
// let promise_race = Promise.race([p1,p2,p3])
// promise_race.then((something)=>{
//     console.log(something)
// })

//promise.any prints the fastest- but if error encountered the next fastest value is shown.
//if all errors - throws an aggregate error(all promises were rejected)
// let promise_any = Promise.any([p1,p2,p3])
// promise_any.then((something)=>{
//     console.log(something)
// })


let promise_resolve = Promise.resolve([p1,p2,p3]) //array shows without red error
promise_resolve.then((something)=>{
    console.log(something)
})

// let promise_reject = Promise.reject([p1,p2,p3]) //array shown as an red error
// promise_reject.then((something)=>{
//     console.log(something)
// })

let p = fetch()