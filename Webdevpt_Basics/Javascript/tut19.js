//web scawling
Array.from(document.links).forEach(function(element){
    console.log(element.href)})

//string in links
str = "python"
Array.from(document.links).forEach(function(element){
    hlink= element.href
    if (hlink.includes(str)){
        console.log(element.href)
    }
    })