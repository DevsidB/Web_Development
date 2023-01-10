// method1

function sid1(name){
    // console.log(`Hello i am printing without return:" ${value}`)
    console.log("Hello i am printing without return: "+ name)
}
sid1("Username")

// method2
const sid2 = function(){
    console.log("Hello i am printing without return: sid2")
}
sid2()

// method3
const sid3 = ()=>{
    console.log("Hello i am printing without return: sid3")
}
sid3()

//method4 - using return
const sid4 = ()=>{
    return "Hello i am printing with the help of function in console: sid4" //return wont print unless called by a function
}
console.log(sid4())

//method5 - one liners do not require curl braces/return
const sid5 = ()=>"Hello i am printing with the help of function in console: sid5" 

console.log(sid5())

//method6 - handling objects in one liners with curly braces=> add round bracket
const sid6 = ()=> ({student_id :"stu_1234"})

console.log(sid6())


//method7 - 1 arguement passed in one liner
// const sid7 = (value) => "My name is :"+ value // method 1 - with 1 argument
const sid7 = value => "My name is :"+ value      // method 2 - with 1 argument

console.log(sid7("sid"))

//method8 - in case of 2 arguments
const sid8 = (value1,value2) => "My name is :"+ value1 + " " + value2 // method 1 - with 1 argument
// const sid8 = value1,value2 => "My name is :"+ value1 + value2      // method 2 - with 2 argument wont work

console.log(sid8("sid","bhosale"))