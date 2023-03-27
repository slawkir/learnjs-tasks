"use strict";

function getLocalDay(date) { 
  let day = date.getDay();

  if (day === 0) { 
    day = 7;
  }
  return day;
}

let date = new Date(2023, 2, 27);
console.log(getLocalDay(date));