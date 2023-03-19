"use strict";

function camelize(str) { 
  let arr = str.split('-');
  if (arr[0] === '') { 
    arr.shift(0);
  }
  arr = arr.map(item => item = item[0].toUpperCase() + item.slice(1));
  arr[0] = arr[0].toLowerCase();

  return arr.join('');
}

console.log(camelize("-list-style-image"));