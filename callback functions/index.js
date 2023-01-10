//version 1
// b = document.createElement("div")
// document.body.appendChild(b)

// a = document.createElement("script")
// a.src = "https://www.google.com/"
// document.body.appendChild(a)

//version2 
// function loadscript(src){
//     a = document.createElement("script")
//     a.src = src 
//     a.onload = function(){
//         console.log("Loaded script with src :" + src)
//     }
//     document.body.appendChild(a)  
// }

// loadscript("https://www.google.com/")

//version3
// function loadscript(src,callback){
//     a = document.createElement("script")
//     a.src = src 
//     setTimeout(a.onload = function(){
//         console.log("Loaded script with src :" + src);
//         callback()},5000
//     )
//     document.body.appendChild(a)  
//     console.log("child appended")
// }

// loadscript("https://www.google.com/",morning)

// function hello() {
//     alert("Hello folks !")
// }

// function morning (){
//     alert ("good morning folks !")
// }

// version4
// function loadscript(src,callback){
//     a = document.createElement("script")
//     a.src = src 
//     a.onload = function(){ //works immediately but only when the src is correct and can be loaded.
//         console.log("Loaded script with src :" + src) 
//         callback(); //call back executed immediately(alert pops immediately)- doesnt pop if src is wrong
//     }  
//     a.onerror = function(){ //handling error if scrc fails to load using onload.
//         console.log("Sripts loaded with errors :" + src) 
//     }
//     b = a.onload
//     setTimeout(b,10000) //executes after 10 secs ,(alert pops even if src is wrong)
//     document.body.appendChild(a)  
//     console.log("child appended")
// }

// loadscript("https://wwwgoogle.com/",hello)

// function hello() {
//     alert("Hello folks !")
// }

// function morning (){
//     alert ("good morning folks !")
// }

// version5
function loadscript(src,callback){
    a = document.createElement("script")
    a.src = src 
    a.onload = function(){ //works immediately but only when the src is correct and can be loaded.
        console.log("Loaded script with src :" + src) 
        callback(null, src); //call back executed immediately(alert pops immediately)- doesnt pop if src is wrong
    }   
    a.onerror = function(){ //handling error if scrc fails to load using onload.
        console.log("Sripts loaded with errors :" + src) 
        callback(new Error("This is the new callback error"));
    }
    b = a.onload
    setTimeout(b,10000) //executes after 10 secs ,(alert pops even if src is wrong)
    document.body.appendChild(a)  
    console.log("child appended")
}

loadscript("https://www.google.com/",hello)

function hello(error, src) {
    if (error){
        return console.log(error)
    }
    alert("Hello folks !" + src)
}

function morning (src){
    alert ("good morning folks !" + src)
}