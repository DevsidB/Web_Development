// ctrl+shift+r to delete cookies and cache 
shownotes()

let addbtn = document.getElementById("addBtn")
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [] //creates a new list if notes is not present in local storage
    }
    else (
        notesObj = JSON.parse(notes) //if local storage is present notes : "list" is parsed as string
    )

    notesObj.push(addtxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj)); //adds the entered items in text box to localstorage
    addtxt.value = ""; //clears the text box
    console.log(notesObj);

    //Updating the cards pulling data from local storage
    shownotes()

})

function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [] //creates a new list if notes is not present in local storage
    }
    else (
        notesObj = JSON.parse(notes) //if local storage is present notes : "list" is parsed as string
    )
    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard card mx-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 id="firstcard" class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id = ${index} onclick = "deleteNote(${index})" class="btn btn-primary sid">Delete Note</button>
                    </div>
                </div>`
    })

    let noteelem = document.getElementById("notes")
    if (notesObj.length !=0){
        noteelem.innerHTML= html
    }
    else{
        noteelem.innerHTML="Nothing to show: Please Enter a note in Text Box above."
    }
}

//function to delete a note

function deleteNote(value){
    console.log("I am getting deleted", value)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [] //creates a new list if notes is not present in local storage
    }
    else (
        notesObj = JSON.parse(notes) //if local storage is present notes : "list" is parsed as string
    )

    notesObj.splice(value,1)// splice(starting index, number of elements) => remove=> noteObj is a derived variable which doesnt affect the actual local storage
    localStorage.setItem("notes", JSON.stringify(notesObj)); //updationg the local storage again with notesObj
    shownotes()//calling once again to update the note cards

}  


let search = document.getElementById("searchTxt")
search.addEventListener("input", function(){
    let inputval = search.value
    console.log("Input event fired", inputval)

    notecard = document.getElementsByClassName("noteCard")
    // console.log(notecard) //collection

    Array.from(notecard).forEach(function(element){
        // console.log(element) //returns each element
        let cardtxt = element.getElementsByTagName("p")[0].innerText //returns p tag for each element 
        console.log(cardtxt)

        if (cardtxt.includes(inputval)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }

    })

})