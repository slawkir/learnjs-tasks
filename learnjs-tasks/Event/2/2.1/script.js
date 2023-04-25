let container = document.querySelector('.container');

container.onclick = function (event) {
  if (event.target.classList != 'remove-button') return;
  
  let pane = event.target.closest('.pane');
  pane.remove();
};