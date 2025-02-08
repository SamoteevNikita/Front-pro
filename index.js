

//Вивести на сторінку в один рядок через кому числа від 10 до 20

let result1 = ""
for (let i=10; i<=20; i++ ) {
    result1 += i + ", "
    
    }
console.log (result1)

    




//Вивести квадрати чисел від 10 до 20

for (let i=10; i<=20; i++ )
    console.log (i ** 2);


//Вивести таблицю множення на 7

for (let i=1; i <= 10; i++ ) {

    console.log (i*7);

    }

//Знайти суму всіх цілих чисел від 1 до 15
let sum2 = 0;  

for (let i = 1; i <= 15; i++) {
    sum2 += i;  
}

console.log(sum2); 


//Знайти добуток усіх цілих чисел від 15 до 35

 let result2 = 1; 

for (let i = 15; i <= 35; i++) {
    result2 *= i; 
}

console.log(result2); 



//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

result3 = 0

for (let i=1; i<=500 ; i++ ) {
    result3 += i;
    
}
let unswer = result3 / 500
console.log(unswer);  


 
//Вивести суму лише парних чисел у діапазоні від 30 до 80

result4 = 0

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        result4 += i;
    }
}
console.log (result4)



//Вивести всі числа в діапазоні від 100 до 200, які кратні 3

result5 = 0
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result5 += i + ',';
    }
}
console.log(result5)


//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let result6 = ""
let enterNum = prompt('введите любое число')

for (let i = 1; i <= enterNum ; i++) {
    if (enterNum % i == 0) {
        result6 += i + ','
    }
}
alert("Дільники числа: " + result6);

//Визначити кількість його парних дільників

let numMain = ""
let numSecond = prompt ('введите число и мы выведем парные делители')
numSecond = parseInt(numSecond);

for ( let i=1; i <= numSecond; i++)  {
    if (numSecond % i == 0 && i % 2 == 0) {
        numMain += i + ','
    }
}
numMain = numMain.slice(0, -1);
alert('парные делители:'  + numMain);

let sum = 0;


//Знайти суму його парних дільників

for ( let i=1; i <= numSecond; i++)  {
    if (numSecond % i == 0 && i % 2 == 0) {
        sum += i
    }
}

alert('сумма парных делителей:' + sum)


//Надрукувати повну таблицю множення від 1 до 10


let arr = []; 

for (let i = 0; i <= 10; i++) {
    let row = []; 
    for (let j = 0; j <= 10; j++) {
        row.push(i * j); 
    }
    arr.push(row); 
}

console.table(arr); 

//последнее посморел в чате гпт(не понял вообще как сделать)
    