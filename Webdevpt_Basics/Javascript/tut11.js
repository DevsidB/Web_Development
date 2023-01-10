console.log(document)
console.log(window)
console.log(document.body)
console.log(document.all)  //returns object
console.log(Array.from(document.all)) //returns an iterable array

// Array.from(document.all).forEach(function(Element){ // to print each element inside document on separate line in console.
//     console.log(Element)
// })

console.log(document.links)
