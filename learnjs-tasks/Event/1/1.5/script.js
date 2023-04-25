let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function() {
//   menuElem.classList.toggle('open');
// }


titleElem.addEventListener('click', () => menuElem.classList.toggle('open'));