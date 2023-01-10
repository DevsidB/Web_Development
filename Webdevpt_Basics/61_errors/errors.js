// remember to use the throw keyword inside try-catch
// try {
//     throw new customerror(" This is a new error") 
// }
// catch (error) {
//     console.log(error.name) //returns the actual name of error
//     console.log(error.message) //prints - customerror is not defined
// }

// try {
//     throw new Error(" This is a new error") 
// }
// catch (error) {
//     console.log(error.name) //returns the actual name of error
//     console.log(error.message) //prints - This is a new error message
// }

// try {
//     throw new ReferenceError(" This is a new error") 
// }
// catch (error) {
//     console.log(error.name) //returns the actual name of error
//     console.log(error.message) //prints - This is a new error message
//     console.log(error.stack) //prints - This is a new error message
// }

//=============
//finally clause:

// try {
//     // console.log(" This is a new success") 
//     console.log(random_variable_try) 
// }
// catch {
//     // console.log("some problems encountered")
//     console.log(random_variable_catch) 
// }
// finally{
//     console.log("I will print any way.I am finally clause. Even if catch fails") // this is used for cleanup tasks. whatsover the case with try/catch this will surely works.
// }
// console.log("Outside of all clauses. I wont work if catch fails") // if catch fails this wont work

//finally clause: works even inside the functions
function f(){

    try {
        console.log(" This is a new success") 
        // console.log(random_variable_try)//toggle //to throw an error
        return ("I am a Return clause")
    }
    catch {
        console.log("some problems encountered")
        console.log(random_variable_catch) //toggle //to thrown an error
    }
    finally{
        console.log("I am finally clause. I will print any way. Even if catch fails") // this is used for cleanup tasks. whatsover the case with try/catch this will surely works.
        //close the file
        //exit the loop
        //write to the log file
        //send an emergency message
        //any most important task which is bound to happen.
    }
    console.log("I am Outside of all clauses. I wont work if catch fails") // if catch fails this wont work
    
}

f()