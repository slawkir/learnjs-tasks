"use strict";

let login = prompt('Кто там?', '');

if (login == "Админ") {
  let password = prompt("Пароль?", '')
  if (password == '' || password == null) {
    alert("Отменено");
  } else if (password != "Я главный" && password != '' && password != null) {
    alert('Неверный пароль');
  } else if (password == "Я главный") {
    alert('Здравствуйте!');
  }
} else if (login == '' || login == null) {
  alert('Отменено');
} else if (login != '' || login != null || login != "Админ") { 
  alert('Я вас не знаю');
}

