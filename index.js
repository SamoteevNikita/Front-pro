

let inputBtn = document.getElementById('myTextField')
let divBox = document.getElementById('infoBox')

inputBtn.addEventListener( 'focus', () => {
    divBox.style.display = "block"
})

inputBtn.addEventListener('blur', () => {
    divBox.style.display = "none"
});

let btnFirst = document.getElementById('firstBtn')
let btnSecond = document.getElementById('secondBtn')
let userLink = ''

btnFirst.addEventListener('click', () => {
    let inputLink = prompt("Введіть посилання:");
    if (inputLink && !inputLink.startsWith("http://") && !inputLink.startsWith("https://")) {
        inputLink = "https://" + inputLink
    }
    userLink = inputLink;
})


btnSecond.addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink; 
    } else {
        alert("Спочатку введіть посилання!");
    }
})
    

const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg"
];

const randomIndex = Math.floor(Maths.randomIndex() * images.length);
const randomImg = 'images/' +images[randomIndex]

document.getElementById("randomImg").src = randomImage;