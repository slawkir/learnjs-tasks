"use strict";

function getDateAgo(date, days) { 
  let dateCopy = new Date(date);
  
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2023, 2, 27);

console.log(getDateAgo(date, 54));