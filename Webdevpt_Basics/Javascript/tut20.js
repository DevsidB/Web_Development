//local storage and Session storage

//local storage kkeps the data stored even if the browser is reopened

localStorage.setItem("Name","sid")
localStorage.setItem("Name2","sid2")


// console.log(window.localStorage.Name) //method1
// console.log(localStorage.Name) //method2
// console.log(localStorage.getItem("Name")) //method3

// console.log(typeof(localStorage.Name)) //string
// console.log(typeof(localStorage)) //object

// localStorage.clear() //clear all cells
// localStorage.removeItem("Name2") //deleting individual

//adding lists to storage- JSON.stringify and JSON.parse
let imparray = ["cabbage","carrot","onion"]
console.log(imparray)
console.log(typeof(imparray)) //object
console.log(JSON.stringify(imparray))
console.log(typeof(JSON.stringify(imparray))) //string


// localStorage.setItem("veggies", imparray) //save object as string
localStorage.setItem("veggies", JSON.stringify(imparray)) //adds semicolons to object "[a,b,c]" and stores as string


console.log(localStorage.veggies) //returns a string
console.log(typeof(localStorage.veggies)) //returns a string

//to convert the string back to object
obj_list = JSON.parse(localStorage.veggies)
console.log(obj_list) //returns back an iterable object


//Adding to session storage
//session storage deletes the data once the browser is reopened

sessionStorage.setItem("ession","session_sid")
sessionStorage.setItem("sessionName2","session_sid2")
sessionStorage.setItem("sessionveggies", JSON.stringify(imparray))
// sessionStorage.clear()//clears the sessiondata