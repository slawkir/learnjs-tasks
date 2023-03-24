'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(obj) { 
  let salariesArr = Object.values(obj);
  let sum = 0;

  for (let item of salariesArr) {
    sum += item;
  }

  return sum;
}

console.log(sumSalaries(salaries));