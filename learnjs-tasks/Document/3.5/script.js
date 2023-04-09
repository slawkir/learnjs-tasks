let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.getElementById('container');

creatTree(container, data);
function creatTree(container, obj) {
  container.innerHTML = creatTreeText(obj);
}

function creatTreeText(obj) { 
  let li = '';
  let ul;

  for (let key in obj) {
    li += '<li>' + key + creatTreeText(obj[key]) + '</li>';
  }
    if (li) {
      ul = '<ul>' + li + '</ul>';
    }
    return ul;
  }




