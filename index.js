const body = document.querySelector("body");
const addDivForBtn = document.createElement("div")
body.appendChild(addDivForBtn)

const containerForPer = document.createElement("div")
containerForPer.style.display = "flex"
body.appendChild(containerForPer)

const emojis = ["😀", "😂", "🤓", "🙂", "😖"]

emojis.map((emoji) => {
    let counter = 0

    const btn = document.createElement("button")
    btn.textContent = emoji
    addDivForBtn.appendChild(btn)


    const paragraph = document.createElement("p")
    containerForPer.appendChild(paragraph)
    btn.addEventListener('click', () => {
        counter ++
        paragraph.textContent = counter
    })
})

