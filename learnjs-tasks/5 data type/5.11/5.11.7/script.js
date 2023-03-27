"use strict";

function getSecondsToTomorrow() { 
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let rest = tomorrow - now;
  
  return Math.round(rest / 1000);
}

console.log(getSecondsToTomorrow());