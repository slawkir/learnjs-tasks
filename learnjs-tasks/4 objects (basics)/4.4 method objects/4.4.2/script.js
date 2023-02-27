"use strict";

let calculator = {
  num1: null,
  num2: null,

  read() {
    this.num1 = +prompt("Введите значение num1", 0);
    this.num2 = +prompt("Введите значение num2", 0);
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

