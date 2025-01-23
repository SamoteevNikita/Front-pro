let name = prompt('как вас зовут?')
alert ('Hello, John! How are you?')

let num1 = Number(prompt("Enter the first number:")); 
let num2 = Number(prompt("Enter the second number:")); 


let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(`Results:\nSum: ${sum}\nDifference: ${difference}\nProduct: ${product}\nQuotient: ${quotient}`);


const value1 = prompt("Enter the first value:");
const value2 = prompt("Enter the second value:");

if (value1 == value2) {
    alert (true)
} else {
    alert (false)
}


const number1 = Number(prompt("Enter the first value:")); 
const number2 = Number(prompt("Enter the second value:")); 
const number3 = Number(prompt("Enter the third value:")); 

const average = (number1 + number2 + number3) / 3;
alert(`The average is: ${average}`);

alert("5-digits output");

let number = +prompt("Input 5-digits number:");
let digits = "";

while (number > 0) {
    let digit = number % 10;
    digits = digit + " " + digits;
    number = (number - digit) / 10;
}

alert(digits.trim());






