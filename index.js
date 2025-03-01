///Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
function cuclNum () {
  let total = 0

  return function (num_1) {
    total += num_1
    return total
  }
}

let upgradeFunction = cuclNum()

console.log(upgradeFunction(33))
console.log(upgradeFunction(66))
console.log(upgradeFunction(2))
console.log(upgradeFunction(1))


///Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.


function getNumFronArr (arr) {
  let sum_1 = 0
  let count = 0
  let Del = 0

  for (let i = 0; i < arr.length; i ++)
    if ( typeof arr[i] === 'number') {
      sum_1 += arr[i]
      count ++
    }
    Del = sum_1 / count

    return { sum_1, count, Del}

    
}

let arr = ['mom', true, 22, undefined, 12]
let uns = getNumFronArr(arr)
console.log(uns);

///Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.

let num3 = Number(prompt("Enter the first number:")); 
let num4 = Number(prompt("Enter the second number:")); 
let znak = prompt("Enter the operation (+, -, *, /, %, ^ (ступінь)):");

function doMath(num3, num4, znak) {
  let result;

  if (znak === '+') {
    result = num3 + num4;  
  } else if (znak === '-') {
    result = num3 - num4;  
  } else if (znak === '*') {
    result = num3 * num4; 
  } else if (znak === '/') {
    if (num4 !== 0) {  
      result = num3 / num4;  
    } else {
      result = "Cannot divide by zero";  
    }
  } else if (znak === '%') {
    result = num3 % num4;  
  } else if (znak === '^') {
    result = num3 ** num4; 
  } else {
    result = "Invalid operation";  
  }

  return result; 
}

let uns_1 = doMath(num3, num4, znak);
console.log(uns_1);  














