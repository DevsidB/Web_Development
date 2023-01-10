// This are the comments which can be changed using settings> json> edit in settings.json> add "editor.tokenColorCustomizations": {"comments": "#706b6b"}
html = "Hello iam a string"
console.log(html.slice(0,4))  //this works same
console.log(html.substring(0,4)) //this works same
console.log(html.slice(-4)) //returns last 4 char
console.log(html.substring(-4)) //returns everything except the last 4 char
console.log(html.split(" ")) //splits the string to a list using delimiter
