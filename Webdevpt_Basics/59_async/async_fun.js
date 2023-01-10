// let sid = ()=>{
//     return 5
// }

// async is used to run the codes in parallel. Observe b below
//async works with then . async works with await
async function sid(){
    console.log("Hi. This is async1 as sid()")
    let p1 =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("25 degree")
            // reject (" This code did not run")
        },5000)
    })
    
    let p2 =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("50 degree")
        },10000)
    })

    // p2.then((value)=>{
    //     alert(value)
    // })

    // p1.then((value)=>{
    //     alert(value)
    // })

    //next line of code is executed only when await executes its code. 
    console.log("fetching data1...")
    let p2w = await p2 //interchange1
    console.log("fetched 1")

    //in this case 10 sec was placed before 5 sec.
    console.log("fetching data2...")
    let p1w = await p1 //interchange1
    console.log("fetched 2")

    //all the lines were executed after 10 sec(including p1 which resolved in 5 secs)
    return [p1w,p2w]
    
}
const atu = async()=>{
    console.log("Hi ! I am async2 function running parallely with async1 as sid(). I cannot stop my execution.")
}
// sid().then((value)=>{
//     alert(value)
// })

// sid().then(alert) //just another way to print alerts

let b =  atu() //this was called first. console prints this first
let a =  sid() // this was called second. so console printed the statement later
/*even if the statements in console were printed 
depending upon the sequence of writing function, 
but the execution of code started parallely.*/

a.then((value)=>{
    console.log(value)
})
