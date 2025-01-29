
let birthYear = prompt("Введіть ваш рік народження:");
if (birthYear === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  let city = prompt("Введіть місто, в якому Ви живете:");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    let sport = prompt("Введіть ваш улюблений вид спорту:");
    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      
      let cityMessage;
      switch (city.toLowerCase()) {
        case "київ":
          cityMessage = "Ти живеш у столиці України.";
          break;
        case "вашингтон":
          cityMessage = "Ти живеш у столиці США.";
          break;
        case "лондон":
          cityMessage = "Ти живеш у столиці Великої Британії.";
          break;
        default:
          cityMessage = `Ти живеш у місті ${city}.`;
      }

      
      let championMessage;
      switch (sport.toLowerCase()) {
        case "футбол":
          championMessage = "Круто! Хочеш стати як Ліонель Мессі?";
          break;
        case "бокс":
          championMessage = "Круто! Хочеш стати як Майк Тайсон?";
          break;
        case "теніс":
          championMessage = "Круто! Хочеш стати як Роджер Федерер?";
          break;
        default:
          championMessage = `Ваш улюблений вид спорту: ${sport}. Це теж чудово!`;
      }

      
      alert(`Ваш вік: ${age} років.\n${cityMessage}\n${championMessage}`);
    }
  }
}




let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log('ви відмінили');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}



function compareNumbers(a, b) {
  if (a > b) return `${a} більше, ніж ${b}`;
  if (a < b) return `${a} менше, ніж ${b}`;
  return "Числа рівні";
}


function compareDistances(km, feet) {
  let meters = feet * 0.305;
  return km * 1000 < meters ? `Кілометри менші` : `Фути менші`;
}


function isDivisor(a, b) {
  return `${a} ${b % a === 0 ? "є" : "не є"} дільником ${b}, а ${b} ${a % b === 0 ? "є" : "не є"} дільником ${a}`;
}


function lastDigitEvenOdd(num) {
  let lastDigit = num % 10;
  return `Остання цифра: ${lastDigit}, вона ${lastDigit % 2 === 0 ? "парна" : "непарна"}`;
}


function compareTwoDigitNumber(num) {
  let first = Math.floor(num / 10);
  let second = num % 10;
  return first > second ? `Перша цифра більша` : `Друга цифра більша`;
}


function analyzeThreeDigitNumber(num) {
  let first = Math.floor(num / 100);
  let second = Math.floor((num / 10) % 10);
  let third = num % 10;
  let sum = first + second + third;
  let product = first * second * third;
  
  return {
      isSumEven: sum % 2 === 0,
      isSumDivisibleBy5: sum % 5 === 0,
      isProductGreaterThan100: product > 100,
      allDigitsSame: first === second && second === third,
      hasSameDigits: new Set([first, second, third]).size < 3
  };
}


function isMirrorNumber(num) {
  let str = num.toString();
  return str === str.split('').reverse().join('');
}


console.log(compareNumbers(5, 10));
console.log(compareDistances(2, 5000));
console.log(isDivisor(3, 9));
console.log(lastDigitEvenOdd(123));
console.log(compareTwoDigitNumber(47));
console.log(analyzeThreeDigitNumber(345));
console.log(isMirrorNumber(123321));
