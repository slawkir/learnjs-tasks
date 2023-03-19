"use strict";

function Calculator() { 
  
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) { 
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    
    if (!this.methods[op] || isNaN(a) || isNaN(b)) { 
      return NaN;
    }

    return this.methods[op](a, b);
  }
}

let powerCalc = new Calculator;
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);

console.log(powerCalc.calculate("3 + 7"));