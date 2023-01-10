element = document.createElement("h3")
console.log(element)
element.id = "googlelink"
element.className = "links"
element.innerHTML = `<a href = "https://www.google.com/"> Go to google.com</a>`
// element.innerText = "<b> Hello i am H3 </b>"
console.log(document)

ul = document.querySelector("#myul")
console.log(ul)
ul.append(element)

