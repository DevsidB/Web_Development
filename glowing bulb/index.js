//select by ID - If selected by class - once toggled, class cannot be fetched by query selector
//to select by class - ".class_name"
//to select by ID - "#id_name"

// let a = function(){
//     document.querySelector("#bulb").classList.toggle("bulb") 
// }
// setInterval(a, 300)

setInterval(function(){
    document.querySelector("#bulb").classList.toggle("bulbyellow")}, 1000 )