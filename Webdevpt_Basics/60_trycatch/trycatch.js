setTimeout(() => {
    console.log("step1...")
}, 1000)


setTimeout(() => {
    console.log("step2...")
}, 2000)

// console.log(something_random) //error at the beginning. Then step1 and 2 are executed==> code stops

setTimeout(() => {
    console.log("step3...")
}, 3000)

// //1. trycatch- try catch is always handles at the beginning of code. Then the later steps wil be printed.
// try {
//     console.log(something_random)//this will throw an error and later steps will stop its execution which will be handled using try catch statements.
// }
// catch (valuefromtry) {
//     // console.log("some error found") //toggle1-use this without passing any argument
//     console.log(valuefromtry) //toggle1

// }
//handling with try catch wont stop the further steps from execution.

//2. trycatch-with set timeout - the errors inside the settimeout wont be handled by tryctch- it works synchronously and doesnt take responsibility of timed function causing any errors 
try {
    setTimeout(() => { //script dies and catch wont work 
        console.log(something_random) 
    }, 4000)
}
catch (valuefromtry) {
    // console.log("some error found") //toggle1-use this without passing any argument
    console.log(valuefromtry) //toggle1

}

setTimeout(() => {
    console.log("step4...")
}, 4000)