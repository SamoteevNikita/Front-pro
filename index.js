let arr = [1, 2, 3, 4, 5, 6]


function generateUl (arr) {
  let ul = document.createElement('ul')


  arr.forEach(num => {
    let li = document.createElement('li')
    li.textContent = num;
    ul.appendChild(li)

  });
 

  const container = document.getElementById('container')
  container.appendChild(ul)

}

generateUl(arr)