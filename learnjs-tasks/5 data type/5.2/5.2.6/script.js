"use strict";

function randomInteger(min, max) { 
  let num = min + Math.random() * (max - min + 1);
  return Math.floor(num);
}

console.log(randomInteger(1, 5));
