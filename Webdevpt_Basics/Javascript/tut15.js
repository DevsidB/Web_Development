//child parent and dom transversing 

// let a = document.querySelector(".no") //first element of class no
let a = document.querySelector(".container")
// console.log(a.childNodes)// returns evry child for container class - includes text ,new lines and comments
// console.log(a.children)// returns only elements for container class - excludes text,new lines and comments
// console.log(a.childNodes[3].nodeName)// node name
// console.log(a.childNodes[3].nodeType)// node type as mentioned below

//element types
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document 
// 10. doc type

// console.log(a.children[1].children[0].children)
// console.log(a.firstChild) //same :returns all childs(no texts,comments,lines)
// console.log(a.childNodes[0]) //same

// console.log(a.children[0]) //same: returns all elements only
// console.log(a.firstElementChild) //same

// first and last child and children
// console.log(a.childNodes)

// console.log(a.firstChild) //
// console.log(a.firstElementChild) //

// console.log(a.lastChild) //
// console.log(a.lastElementChild) //

//count
// console.log(a.childNodes) // collection of all nodes
// console.log(a.children) // collection of elements
// console.log(a.childElementCount) //returns count

//siblings-parent node/element, next sibling, next element sibling
console.log(a.firstElementChild) //
console.log(a.firstElementChild.parentElement)  
console.log(a.firstElementChild.nextSibling) 
console.log(a.firstElementChild.nextElementSibling) 





