"use strict";

function sumInput() { 
  let arr = [];
  let num;
  let sum = 0;

  while (true) {
    num = prompt("Введите число");

    if (num === '' || num === null || !isFinite(num)) { 
      break;
    }
    arr.push(+num);
  }
  
  for (let key of arr) {
    sum += key;
  }
  
  alert (`Сумма членов массива: ${sum}`);
}

sumInput();

