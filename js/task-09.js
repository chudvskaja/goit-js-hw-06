
const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');


changeColorBtn.addEventListener('click', onClick )


function onClick () {
currentColor.textContent = getRandomHexColor();
bodyEl.style.backgroundColor = currentColor.textContent;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
}


