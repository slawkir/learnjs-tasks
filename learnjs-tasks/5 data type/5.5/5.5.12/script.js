"use strict";

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) { 
  let uniqueArr = [];

  for (let str of arr) {
    if (!uniqueArr.includes(str)) { 
      uniqueArr.push(str);
    }
  }

  return uniqueArr;
}

console.log(unique(strings));