class Resident {
  constructor(name) {
    this.name = name;
  }
}

class Apartment {
  constructor(number) {
    this.number = number;
    this.residents = [];
  }

  addResident(resident) {
    this.residents.push(resident);
  }
}

class House {
  constructor() {
    this.apartments = [];
  }

  addApartment(apartment) {
    this.apartments.push(apartment);
  }

  getInfo() {
    let info = 'Дом содержит следующие квартиры:\n';
    this.apartments.forEach(ap => {
      info += `\nКвартира ${ap.number}:\n`;
      ap.residents.forEach((res, i) => {
        info += `  Жилец ${i + 1}: ${res.name}\n`;
      });
    });
    return info;
  }
}


let house = new House();
let totalApartments = 0;
let currentApartment = 1;


const houseForm = document.querySelector('.house-form');
const apartmentForm = document.querySelector('.apartment-form');
const residentForm = document.querySelector('.resident-form');
const showInfoBtn = document.querySelector('.show-info-btn');

const apartmentNumberDisplay = document.querySelector('.apartment-number');
const residentNumberDisplay = document.getElementById('resident-number');


houseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const amountInput = document.getElementById('aprtmt-amount');
  totalApartments = parseInt(amountInput.value);

  if (!totalApartments) {
    alert('Введите количество квартир');
    return;
  }

  houseForm.classList.add('hidden');
  apartmentForm.classList.remove('hidden');
  apartmentNumberDisplay.textContent = `Квартира №${currentApartment}`;
});


document.getElementById('apartment-btn').addEventListener('click', (e) => {
  e.preventDefault();

  const residentCount = parseInt(document.getElementById('resident-amount').value);
  if (!residentCount) {
    alert('Введите количество жильцов');
    return;
  }

  apartmentForm.classList.add('hidden');
  residentForm.classList.remove('hidden');

  const residentNumber = document.getElementById('resident-number');
  residentNumber.innerHTML = '';
  for (let i = 1; i <= residentCount; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Имя жильца ${i}`;
    input.required = true;
    residentNumber.appendChild(input);
  }
});


document.getElementById('residents-btn').addEventListener('click', (e) => {
  e.preventDefault();

  const inputs = residentNumberDisplay.querySelectorAll('input');
  const apartment = new Apartment(currentApartment);

  for (let input of inputs) {
    const name = input.value.trim();
    if (!name) {
      alert('Все поля должны быть заполнены');
      return;
    }
    apartment.addResident(new Resident(name));
  }

  house.addApartment(apartment);
  currentApartment++;

  residentForm.classList.add('hidden');

  if (currentApartment <= totalApartments) {
    apartmentForm.classList.remove('hidden');
    document.getElementById('resident-amount').value = '';
    apartmentNumberDisplay.textContent = `Квартира №${currentApartment}`;
  } else {
    showInfoBtn.classList.remove('hidden');
  }
});


showInfoBtn.addEventListener('click', () => {
  alert(house.getInfo());
});
