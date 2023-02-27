"use script";

function Accumulator(startingValue) { 
  
  this.value = startingValue;
  
  this.read = function () {
    let num = +prompt("Введите число ", 0);
    return this.value = this.value + num;
  };
}

let acc = new Accumulator(1);

acc.read();
acc.read();

alert(acc.value);
