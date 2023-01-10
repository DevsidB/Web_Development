const loadscript = (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src =src
        document.body.appendChild(script)
        
        script.onload=()=>{
            resolve(" The scripts has been loaded")
        }
        script.onerror= ()=>{
            reject("The script is rejected")
        }

    })
}

let p1 = loadscript("https://www.google.com/")

p1.then((value)=>{
    console.log(value)
    return loadscript("https://wwwgoogle.com/")
}).then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.log(value)
})