let ladder = {
  step: 0,
  up: function () {
      this.step++;
      return this;
  },
  down: function () {
      this.step--;
      return this;
  },
  showStep: function () { // показує теперішню сходинку
      alert(this.step);
      return this;
  }
};
ladder.up().down().up().up().up().up().down().down().showStep(); 


