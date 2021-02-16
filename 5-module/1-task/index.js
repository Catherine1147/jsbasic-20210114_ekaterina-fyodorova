

function hideSelf() {
  let button = document.querySelector('.hide-self-button');

  button.addEventListener('click', hideSelf);
  this.hidden = true;
}

