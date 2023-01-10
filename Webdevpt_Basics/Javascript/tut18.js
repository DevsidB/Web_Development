let btn = document.getElementById("btn")
btn.addEventListener('click',function(e){
    // console.log("Button was clicked")
    e.preventDefault()
})

// btn.addEventListener('dblclick',function(e){
//     console.log("double Button was clicked")
//     e.preventDefault()
// })

btn.addEventListener('mousedown',function(e){
    console.log("mouse down was clicked")
    e.preventDefault()
})


//method1- using getelementbyid[index]
// console.log(document.getElementsByClassName("headclass")[0]) //returns collection
// document.getElementsByClassName("headclass")[0].addEventListener('mouseenter',function(){
//     console.log("mouse entered")
// })

// method2- using queryselector
// console.log(document.querySelector(".headclass"))
document.querySelector(".headclass").addEventListener('mouseenter',function(){
    console.log("mouse entered")
})

document.querySelector(".headclass").addEventListener('mouseleave',function(){
    console.log("mouse left")
})

document.querySelector(".headclass").addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},255)`
    console.log("mouse moved")
})