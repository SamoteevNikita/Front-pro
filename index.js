let currentProduct = null
const productsData = {
  phones: [
      { name: 'iPhone 14', price: '1000$', desc: 'Сучасний смартфон' },
      { name: 'Samsung Galaxy S23', price: '900$', desc: 'Флагман Samsung' }
  ],
  laptops: [
      { name: 'MacBook Air', price: '1200$', desc: 'Легкий та потужний' },
      { name: 'Dell XPS 15', price: '1300$', desc: 'Високопродуктивний ноутбук' }
  ]
};

const productsBlock = document.getElementById('products');
const productInfoBlock = document.getElementById('product-info');
const categoriesBlock = document.querySelector('.categories');
const myPurchases = document.getElementById('Purchase'); 



function showProducts(category) {
  productsBlock.innerHTML = ''; 
  productInfoBlock.innerHTML = ''; 

  productsData[category].forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('item');
      productItem.textContent = product.name;
      productItem.addEventListener('click', () => showProductInfo(product));
      productsBlock.appendChild(productItem);
  });

  productsBlock.style.display = 'block';
}


function showProductInfo(product) {
  currentProduct = product;
  productInfoBlock.innerHTML = `
      <h3>${product.name}</h3>
      <p>Ціна: ${product.price}</p>
      <p>${product.desc}</p>
      <button id="buy-button">Купити</button>
  `;

  productInfoBlock.style.display = 'block';

  document.getElementById('buy-button').addEventListener('click', () => {
      showOrderShow()
  });
}


function showOrderShow() {
  const orderForm = document.getElementById('product-info');

  orderForm.innerHTML = `
    <div id="order-form">
        <form id="orderForm">
            <label>ФИО:</label>
            <input type="text" id="name" required>

            <label>Город:</label>
            <select id="city" required>
                <option value="">Выберите город</option>
                <option value="Kiyv">Киев</option>
                <option value="Kharkiv">Харьков</option>
                <option value="Lviv">Львов</option>
                <option value="Odesa">Одесса</option>
            </select>

            <label>Отделение новой почты:</label>
            <input type="text" id="np" required>

            <label>Оплата:</label>
            <input type="radio" name="payment" value="Накладная оплата"> Накладной платеж
            <input type="radio" name="payment" value="Оплата картой"> Оплата картой

            <label>Количество:</label>
            <input type="number" id="quantity" min="1" required>

            <label>Комментарий:</label>
            <textarea id="comment"></textarea>

            <button type="button" id="confirmBtn">Подтвердить заказ</button>
        </form>
    </div>
  `;

  finishOrder()
}


function resetView() {
  productsBlock.innerHTML = '';
  productInfoBlock.innerHTML = '';
  productsBlock.style.display = 'none';
  productInfoBlock.style.display = 'none';
}


categoriesBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('item')) {
      const category = event.target.id;
      showProducts(category);
  }
});

function finishOrder () {
  const finishBtn = document.getElementById('confirmBtn')

  

  finishBtn.addEventListener('click', () => {

    const name = document.getElementById('name').value.trim();
    const city = document.getElementById('city').value;
    const warehouse = document.getElementById('np').value.trim();
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    const date = new Date().toLocaleString();

    const order = {
      name: name,
      city: city,
      warehouse: warehouse,
      quantity: quantity,
      paymentMethod: paymentMethod.value,
      date: date,
      product: currentProduct.name,
      price: currentProduct.price,
    }


    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert(`
      Спасибо за заказ ${name}!
    `);
  })
}

function showOrder () {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const ordersBlock = document.getElementById('products');
  ordersBlock.innerHTML = '';

  orders.forEach((order, index) => {
    const orderItem = document.createElement('div');   
    orderItem.classList.add('item')
    orderItem.textContent = `Заказ от ${order.name} (${order.date}) - ${order.price} `;
    orderItem.addEventListener('click', () => showOrderDetails(order, index))
    ordersBlock.appendChild(orderItem);

    const delateBtn = document.createElement('button')
    delateBtn.textContent = 'Удалить'
    delateBtn.addEventListener('click', () => deleteOrder(index))
    ordersBlock.appendChild(delateBtn);
  })
}


function showOrderDetails (order, index) {
  const orderDetailsBlock = document.getElementById('product-info');
  orderDetailsBlock.innerHTML = `
    <h3>Деталі замовлення</h3>
    <p>Ім'я: ${order.name}</p>
    <p>Місто: ${order.city}</p>
    <p>Відділення нової пошти: ${order.warehouse}</p>
    <p>Кількість: ${order.quantity}</p>
    <p>Метод оплати: ${order.paymentMethod}</p>
    <p>Дата замовлення: ${order.date}</p>
    <p>Продукт: ${order.product}</p>
    <p>Ціна: ${order.price}</p>
  `;
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(orders)); 
  showOrder()
}

categoriesBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('item')) {
    if (event.target.id === 'purchase') {
      showOrder();
    } else {
      const category = event.target.id;
      showProducts(category);
    }
  }
});