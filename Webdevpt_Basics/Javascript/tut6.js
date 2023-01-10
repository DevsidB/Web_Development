myname = "sid"
fruit1 = "orange"
fruit2 = "mango"

myhtml = `Welcome ${myname}
<h1>This is the section of fruits</h1>
<p>Your favourite fruits are ${fruit1} and ${fruit2}`

document.body.innerHTML= myhtml
