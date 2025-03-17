let shop = {
  "Елекстроника": [
    {name: "Iphone16", price: 1200 },
    {name: "Iphone13", price: 800 },
    {name: "Iphone10", price: 500 }
  ],
  "Машины": [
    {name: "BMW", price: 10000 },
    {name: "Matiz", price: 2000 },
    {name: "Toyota", price: 4000 }
  ]
}

console.log("категории:")
let categories = Object.keys(shop)
categories.forEach((category, index) => console.log(`${index+1}. ${category}`))

let categoryIndex = parseInt(prompt(`выберите категорию (1 или 2)`)) -1
let selectredCategory = categories[categoryIndex]


console.log(`товары в готегории ${selectredCategory}:`)
shop[selectredCategory].forEach((product, index) => console.log(`${index +1}. ${product.name} - ${product.price} usd`))

let productIndex = parseInt(prompt(`Выберите товар`)) -1;
let selectredProduct = shop[selectredCategory][productIndex]

let quantityOfProduct = parseInt(prompt(`Введите количество товара`))
let totalPrice = selectredProduct.price * quantityOfProduct



if (totalPrice => 4000) {
  totalPrice = totalPrice * 0.8; 
  alert(`Вы получили скидку в размере 20%, поздравляем! Сумма для оплаты: ${totalPrice} usd`);
} else {
  alert(`У вас нету скидок, сумма для оплаты: ${totalPrice} usd`);
}



