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
  productInfoBlock.innerHTML = `
      <h3>${product.name}</h3>
      <p>Ціна: ${product.price}</p>
      <p>${product.desc}</p>
      <button id="buy-button">Купити</button>
  `;

  productInfoBlock.style.display = 'block';

  document.getElementById('buy-button').addEventListener('click', () => {
      alert(`Товар "${product.name}" куплено!`);
      resetView();
  });
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
