"use strict";

function checkSpam(str) { 
  str = str.toLowerCase();
  return (str.includes("viagra") || str.includes("xxx")) ? true : false;
}

console.log(checkSpam('XXX'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

