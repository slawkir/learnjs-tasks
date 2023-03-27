"use strict";

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 1);
  return date.getDate(date.setDate(date.getDate() - 1));
}

console.log(getLastDayOfMonth(2012, 1));


