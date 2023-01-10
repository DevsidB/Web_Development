fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData=> {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById("jokeElement")
        jokeElement.innerText= jokeText
        console.log(jokeElement.innerHTML)
        console.log(jokeData.attachments[0].text)
    })