//Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
function createFunction() {
  let total = 0;  

  return function(num) {
    total += num; 
    return total;  
  };
}

const sum = createFunction();  
console.log(sum(3));  
console.log(sum(5)); 
console.log(sum(20)); 
console.log(sum(1));  


//Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.
function getNumFronArr(arr) {
  let sum_1 = 0;
  let count = 0;
  let del = 0;

  for (let i = 0; i < arr.length; i++) { 
    if (typeof arr[i] === 'number') {
      sum_1 += arr[i];
      count++;
    }
  }
  del = sum_1 / count
  
  return { sum_1, count, del };
}

let arr = ['mom', true, 22, undefined, 12];
let uns = getNumFronArr(arr);
console.log(uns); 


//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.
let num3 = Number(prompt("Enter the first number:")); 
let num4 = Number(prompt("Enter the second number:")); 
let znak = prompt("Enter the operation (+, -, *, /, %, ^ (ступінь)):");

let result 
function doMath (num3, num4, znak) {
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

  return result  
}
let uns_1 = doMath(num3, num4, znak)
console.log(uns_1) 




//Створити функцію, яка видаляє з рядка всі символи, які ми 
// передали другим аргументом. 
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач

let str = prompt('Напишите текст')
let delstr = prompt('напишите буквы которые хотите удалить')

function delAbcfromStr (str, AbcToRemove) {
    
return str
  .split("")
  .filter(char => !AbcToRemove.includes(char))
  .join("");
}
let result_2 = delAbcfromStr(str, delstr.split(""))
console.log(result_2)

//Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву та внутрішніх масивів задає користувач.
//  Значення всіх елементів масивів задає користувач.



let arr_4 = [];
function getMass () {
  let countOfMas = Number(prompt("Введите сколько рядков будет в массиве"));
  let elements = Number(prompt("Напишите сколько символов будет в каждом массиве"));

  for (let i = 0; i < countOfMas; i++) {
    let subArray = [];
    for (let j = 0; j < elements; j++) {
      let value = prompt(`Введите значение для элемента ${j + 1} в строке ${i + 1}`);  
      subArray.push(value);
    }
    arr_4.push(subArray)
  }
  console.log(arr_4);
}

getMass()

