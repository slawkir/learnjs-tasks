"use strict";

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // возврат самого объекта
  },
  down() {
    this.step--;
    return this; // возврат самого объекта
  },
  showStep: function () {
    alert(this.step);
    return this; // возврат самого объекта
  }
};

