let users = JSON.parse(localStorage.getItem('users')) || [];

function renderUsers() {
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = '';

  users.forEach((user, index) => {
      usersContainer.innerHTML += `
          <div class="user-item">
              <span>${user.name} (${user.email})</span>
              <button onclick="viewUser(${index})">View</button>
              <button onclick="editUser(${index})">Edit</button>
              <button onclick="removeUser(${index})">Remove</button>
          </div>
      `;
  });

  localStorage.setItem('users', JSON.stringify(users));
}


function showForm (editIndex = null) {
  const formContainer = document.getElementById('form-container');
  const formTitle = document.getElementById('form-title');
  const userIdInput = document.getElementById('userId');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  formContainer.style.display = 'block'

  if (editIndex !== null) {
    formTitle.textContent = 'Редагувати користувача';
    userIdInput.value = editIndex;
    nameInput.value = users[editIndex].name;
    emailInput.value = users[editIndex].email;
  } else {
    formTitle.textContent = 'Додати користувача';
    userIdInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
  }
}

function hideForm (){
  document.getElementById('form-container').style.display = 'none'
}

function saveUser() {
  const userId = document.getElementById('userId').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (userId) {
      users[userId] = { name, email };
  } else {
      users.push({ name, email });
  }
  renderUsers();
  hideForm();
}

function viewUser(index) {
  alert(`Ім'я: ${users[index].name}\nEmail: ${users[index].email}`);
}

function editUser(index) {
  showForm(index);
}

function removeUser(index) {
  if (confirm('Ви впевнені, що хочете видалити користувача?')) {
      users.splice(index, 1);
      renderUsers();
  }
}

renderUsers();