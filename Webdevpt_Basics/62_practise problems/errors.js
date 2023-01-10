
// const loadscript = async(src)=>{
// return new Promise((resolve,reject)=>{
//     let script = document.createElement("script")
//     script.src = src
//     script.onload= ()=>{
//         resolve (src + "success")
//     }
//     document.body.append(script)
// })
// }

// problem 1 solution using then 
// let a =loadscript("https://www.google.com/")
// a.then((value)=>{
//     console.log(value)
// }) 

// problem 2 solution using asycn- await
// const main1=async()=>{
//     s1 = new Date().getSeconds()
//     m1 = new Date().getMilliseconds() //prints date //prints milliseconds
//     console.log(s1 + ":" + m1) 
//     let a = await loadscript("https://www.google.com/") //appends the script to html body
//     console.log(a) //logs to console
//     s2 = new Date().getSeconds()
//     m2 = new Date().getMilliseconds() //prints date //prints milliseconds
//     console.log(s2 + ":" + m2) 
// }

// main1()


//problem 3
let p1 =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("problem occured"))
        }, 3000);
    })
} 

let a = async()=>{
    try{
       c =  await p1() //await keeps the c from waiting till the timeout is executed completely. Other wise if await async is not used then try will schedule the syntax and move to the next block. This will cause an error to throw.
       console.log(c)
    }
    catch(error){
        console.log(error)
    }
}

a()
console.log("done")