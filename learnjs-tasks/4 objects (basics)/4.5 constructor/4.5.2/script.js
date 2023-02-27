"use strict";

function Calculator() { 

  this.read = function () {
    this.a = +prompt('Введите число a: ', 0);
    this.b = +prompt('Введите число b: ', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () { 
    return this.a * this.b;
  }
}

let calc = new Calculator();

calc.read();

alert("Sum = " + calc.sum());
alert('Mul = ' + calc.mul());