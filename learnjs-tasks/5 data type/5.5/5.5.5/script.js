"use strict";

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

// function copySorted(arr) {
//   let copyArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     copyArr[i] = arr[i];
//   }

//   return copyArr.sort();
// }

function copySorted(arr) { 
  return arr.slice().sort();
}

console.log(sorted);


