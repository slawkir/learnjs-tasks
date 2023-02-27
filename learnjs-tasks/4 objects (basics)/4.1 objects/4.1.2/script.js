"use strict";

function isEmpty(obj) { 
  let sum = 0;
  
  for (let key in obj) { 
    if (key !== undefined) {
      sum += 1;
    }
  }

  if (sum !== 0) {
    return false;
  } else { 
    return true;
  }
}

let schedule = {};
let schedule2 = {
  "6:00": "get up!",
  "9:00": "start stady"
};

console.log(isEmpty(schedule));
console.log(isEmpty(schedule2));

