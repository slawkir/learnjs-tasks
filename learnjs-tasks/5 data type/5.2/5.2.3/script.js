"use strict";

function readNumber() { 
  let num;
  do {
    num = prompt("Введите число");
  } while (!isFinite(num));
  if (num === null || num === '') return null;
  alert(num);
}

alert(readNumber());