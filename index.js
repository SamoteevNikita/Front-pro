const images = [
  'https://miro.medium.com/v2/resize:fit:400/1*0V8IZH_wHIo7yZvVYm5fVQ.jpeg',
  'https://habrastorage.org/files/61d/d9e/d20/61dd9ed201254aeba4e52189db698b6a.jpg',
  'https://monsterlessons.com/api/storage/uploads/posters/9d8f3bee-100d-49b5-9973-49e7b04077e0/poster.png',
  'https://cdn.otus.ru/media/public/1b/b3/Node_Deep_24.1-5020-1bb356.png',
];



let currentIndex = 0;

function showImage(index) {
  let image = document.getElementById('image');
  image.src = images[index];
}

document.querySelector('#nextbtn').addEventListener('click', () => {
  currentIndex ++
  if (currentIndex >= images.length) {
    currentIndex = 0
  }
  showImage(currentIndex)
})

document.querySelector('#prevbtn').addEventListener('click', () => {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = images.length - 1
  }
  showImage(currentIndex)
})

setInterval(() => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;  
  }
  showImage(currentIndex);
}, 3000);  

showImage(currentIndex)