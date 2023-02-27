"use strict";

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let salaries2 = {};

function getSum(obj) { 
  let sum = 0;

  for (let key in obj) { 
    sum += obj[key];
  }

  return sum;
}

console.log(getSum(salaries)); // 390
console.log(getSum(salaries2)); // 0