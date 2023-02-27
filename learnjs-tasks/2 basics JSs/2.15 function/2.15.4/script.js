"use strict";

function pow(x, n) { 
  return x ** n;
}

let x = +prompt("Введите число X", 1);

let n;
while (true) { 
   n = +prompt("Введите число n, которое должно быть больше 1", 2);
  if (n <= 1) { 
    alert(`Степень ${n} не поддерживается. Введите корректное значение`);
  } else if (n > 1) { 
    break;
  }
}

alert(pow(x, n));

