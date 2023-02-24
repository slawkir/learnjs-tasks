"use strict";

let number = prompt("Введите число", 2);
let result = '';

nextPrime:
for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  result += `   ${i}`;
}

alert(result);