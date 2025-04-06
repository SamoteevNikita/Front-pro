
let person = {
  showInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
};

let car = {
  showInfo() {
    console.log(`Автомобіль: ${this.brand} ${this.model}, ${this.year}, колір: ${this.color}`);
    if (this.owner) {
      console.log('Власник:');
      this.owner.showInfo();
    } else {
      console.log('Власник не призначений');
    }
  },

  setOwner(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log('Власник повинен бути старше 18 років!');
    }
  }
};


let ivan = {
  __proto__: person,
  name: 'Іван',
  age: 25
};

let katya = {
  __proto__: person,
  name: 'Катя',
  age: 16
};


let bmw = {
  __proto__: car,
  brand: 'BMW',
  model: 'X5',
  year: 2021,
  color: 'Чорний',
  owner: null
};

let audi = {
  __proto__: car,
  brand: 'Audi',
  model: 'A4',
  year: 2020,
  color: 'Синій',
  owner: null
};


bmw.setOwner(ivan);   
audi.setOwner(katya); 


bmw.showInfo();
audi.showInfo();

