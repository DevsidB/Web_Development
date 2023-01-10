//first node child vs first element child
//node returns any text,commentpara,space as well as element wrt selected parameter
//element returns only the element inside <></> wrt selected parameter


// console.log(document.body.firstChild) //might return anything that is a first child
// console.log(document.body.firstElementChild) //ignores text/comments and returns only elements inside<></> tag

// console.log("---")

// console.log(document.body.firstChild.nextSibling) 
// console.log(document.body.firstElementChild.nextSibling) 

// console.log("---")

// console.log(document.body.firstChild.nextElementSibling) 
// console.log(document.body.firstElementChild.nextElementSibling) 

// console.log("---")

// console.log(document.body.firstElementChild.previousElementSibling) 
// console.log(document.body.lastElementChild) 

//Changing elements backgrpund
const color_change= ()=>{
    document.body.firstElementChild.firstElementChild.firstElementChild.style.background = "red"
    document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.style.background = "green"
    document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.background = "cyan"
}

// color_change()

let t = document.body.getElementsByClassName("container")[1].firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tFoot) //no foot entered
console.log(t.tHead.firstElementChild)
console.log(t.tBodies)
console.log(t.rows[0].cells) //returns all columns th at 0th row [th th th th ]
console.log(t.rows[1].cells) //return row named 1 th and td td td  [th td td td]


