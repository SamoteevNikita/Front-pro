//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

window.onload = function() {
    let length = prompt("Введите длину массива:");
    let arr = [];

    // Заполняем массив элементами
    for (let i = 0; i < length; i++) {
        arr.push(prompt(`Введите элемент ${i + 1}:`));
    }

    // Показываем созданный массив
    alert(`Созданный массив: [${arr}]`);

    // Сортируем массив по возрастанию
    arr.sort((a, b) => a - b);

    // Показываем отсортированный массив
    alert(`Отсортированный массив: [${arr}]`);

    //Потім видалити елементи з масиву з 2 по 4 (включно).
    arr.splice(2, 3);
    alert (`виправленний масив: [${arr}]`)
};


window.onload = function() {
    //Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    //Знайти суму та кількість позитивних елементів.
    let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    let sum = 0;
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count++;
        }
    }
    alert (`сумма позитивных елементов: [${sum}]`)
    alert (`количество елементов: [${count}]`)

    //Знайти мінімальний елемент масиву та його порядковий номер.
    let min = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    alert (`мінімальний елемент масиву: [${min}]`)

    //Знайти максимальний елемент масиву та його порядковий номер.
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    alert (`максимальный елемент масиву: [${max}]`)

    //Визначити кількість негативних елементів.
    let negativeCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
    }
    alert (`кількість негативних елементів: [${negativeCount}]`)

    //Знайти кількість непарних позитивних елементів.

    let countOddPositive = 0;
    for (let i=0; i< arr.length; i++) {
        if ( arr[i] > 0 && arr[i] % 2 != 0) {
            countOddPositive++;
        }
    }
    alert  (`кількість непарних позитивних елементів: [${countOddPositive}]`)
    
    

    //Визначити кількість парних позитивних елементів.
    let countPositive = 0;
    for (let i=0 ; i < arr.length; i++) {
        if ( arr[i] > 0 && arr[i] % 2 == 0) {
            countPositive++;
        }
    }
    alert  (`кількість непарних позитивних елементів: [${countPositive}]`)

    //Знайти суму парних позитивних елементів.
    let sumPositive = 0;
    for (let i= 0 ; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 == 0) {
            sumPositive += arr[i];
        }
    }
    alert (`сума парних позитивних елементів: [${sumPositive}]`)

    //Знайти суму непарних позитивних елементів.
    let sumOddPositive = 0;
    for (let i=0;  i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 != 0)
            sumOddPositive += arr[i];
        }
    }
    alert (`сума непарних позитивних елементів: [${sumOddPositive}]`)



    //Знайти добуток позитивних елементів.
    let productPositive = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            productPositive *= arr[i];
        }
    }

    alert (`добуток позитивних елементів: [${productPositive}]`)
    
    //Знайти найбільший серед елементів масиву, решту занулити.

    let max2 = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max2) {
            max2 = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max2) {
            arr[i] = 0;
        }
    }
    
    alert(`Масив після змін: [${arr}]`);  
}