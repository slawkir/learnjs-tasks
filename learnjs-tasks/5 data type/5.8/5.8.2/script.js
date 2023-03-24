'use strict';

let masseges = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let dateMap = new WeakMap();

dateMap.set(masseges[0], new Date(2023, 3, 1));
