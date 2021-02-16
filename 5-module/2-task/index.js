function toggleText() {
  let text = document.querySelector('#text');
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    if (text.hasAttribute('hidden')) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
