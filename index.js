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

    alert(`
      Спасибо за заказ ${name}!
      Вы купили: ${currentProduct.name}
      Количество: ${quantity}
      Город: ${city}
      Отделение Новой почты: ${warehouse}
      Метод оплаты: ${paymentMethod.value}
    `);
  })
}