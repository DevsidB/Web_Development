//creating, replacing ,removing elements

//creating element
element = document.createElement("li")//creating an element using DOM
console.log(element)

element.className = "childul" //set a class
element.id = "created_element" //set an id
element.setAttribute("title","mytitle") //set an attribute
element.innerText = "<b>This is the text I created using Innertext</b>" //text is entered along with the tags
element.innerHTML = "<b>This is the text I created using Innertext</b>" //tags are taken into account
console.log(document)


//appending element/child
ul = document.querySelector("ul.this")
console.log(ul)

ul.appendChild(element)// dynamically appending elements to the HTML

text = document.createTextNode(" I am an appended text node")
console.log(text)
element.appendChild(text) //dynamcally appending text to the existing text


// replacing the element/child
elem2 = document.createElement("h3")
elem2.id = "elem2"
elem2.className  = "elem2"

//Method1: Entering text
elem2.innerText = "Replaced by h3 element(innertext)" // one way to enter text

//Method2: Entering text
let tnode = document.createTextNode(" Replaced by(createtextnode) ")
elem2.appendChild(tnode)

// element.replaceWith(elem2) //(oldelement.replacewith(newelement))


// replacing the child
let myul = document.getElementById("myul")
console.log(myul)
oldchild = document.getElementById("firstul")
myul.replaceChild(element,oldchild) //hello got replaced

//removing child
myul.removeChild(document.getElementById("lastul")) //removing the child with class name = last child

// getting attributes of variables used
console.log(element.getAttribute("id"))
console.log(element.getAttribute("class"))
console.log(oldchild.getAttribute("id"))
console.log(oldchild.getAttribute("class"))

//checking if any variable has a class/id or not
console.log(element.hasAttribute("class"))
console.log(elem2.hasAttribute("id"))
console.log(elem2.hasAttribute("href"))

//remove attributes
// console.log(elem2.removeAttribute("id"))

// set attribute/replace attributes
console.log(elem2.setAttribute("id","newid"))

console.log(elem2,element,oldchild)