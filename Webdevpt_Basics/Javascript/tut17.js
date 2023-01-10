//simple event listener
// element = document.getElementById("heading")
// element.addEventListener("click", function(){
//     console.log("You clicked the heading")
//     location.href = "https://www.google.com/"
// })

//version2 
element = document.getElementById("heading")
element.addEventListener("mouseover", function(e){
    console.log("You clicked the heading")
    // location.href = "https://www.google.com/"
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList) //returns a list
    console.log(Array.from(e.target.classList)) //returns an iterable array ('for each function' can be used to obtain the individual index item)
    console.log(e.offsetX)
    console.log(e.offsetY)
    console.log(e.clientX)
    console.log(e.clientY)

})
