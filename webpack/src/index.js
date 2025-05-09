import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const entryPage = document.getElementById('entry-page');
    const gamePage = document.getElementById('game-page');
  
    if (button && entryPage && gamePage) {
      button.addEventListener('click', () => {
        gamePage.classList.remove('d-none');
        entryPage.classList.add('d-none');
      });
    }

    const addButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
  const modalTitle = document.getElementById('staticBackdropLabel');

  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.card');
      const title = card.querySelector('.card-title')?.textContent;
      if (modalTitle && title) {
        modalTitle.textContent = title;
      }
    });
  });
});


// Массив для хранения заказов
const cart = [];

// Добавление слушателей на кнопки "Добавить" на карточках
document.querySelectorAll('[data-bs-target="#staticBackdrop"]').forEach(btn =>
  btn.addEventListener('click', () => {
    const name = btn.closest('.card').querySelector('.card-title').textContent.trim();
    localStorage.setItem('selectedProduct', name);
  })
);


// Обработка кнопки "Добавить в корзину" из модального окна
document.getElementById('addToCart').addEventListener('click', () => {
  const size = document.getElementById('stuffing').value;
  const sauce = document.getElementById('sauce').checked;
  const mayo = document.getElementById('mayo').checked;
  const name = localStorage.getItem('selectedProduct') || 'Неизвестный товар';

  const toppings = [];
  if (sauce) toppings.push('соус');
  if (mayo) toppings.push('майонез');

  const order = { name, size, toppings };
  cart.push(order);

  updateCartModal(); // Обновляем содержимое корзины
  alert('Товар добавлен в корзину!');
});

// Обновление содержимого модалки корзины
function updateCartModal() {
  const modalBody = document.querySelector('#exampleModal .modal-body');
  modalBody.innerHTML = '';

  if (cart.length === 0) {
    modalBody.textContent = 'Корзина пуста.';
    return;
  }

  const list = document.createElement('ul');
  list.className = 'list-group';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${item.name} — размер ${item.size}` + (item.toppings.length ? `, с ${item.toppings.join(' и ')}` : ', без добавок');
    list.appendChild(li);
  });

  modalBody.appendChild(list);
}

  
