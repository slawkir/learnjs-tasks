"use strict";

const user = {
  name: "John"
};

user.name = "Pete"; // будет работать. Нельзя изменить объект, но содержимое изменить можно

console.log(user); //{ name: 'Pete' }