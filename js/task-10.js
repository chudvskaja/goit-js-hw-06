const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const inputEl = document.querySelector('input');




createBtn.addEventListener('click', createBox);
deleteBtn.addEventListener('click', destroyBoxes);

function createBox(amount){
  amount = Number(inputEl.value);

  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i ++) {
    const size = basicSize + i * 10;
    const divEl = document.createElement('div');

    divEl.style.cssText = `width: ${size}px; height: ${size}px; margin: 10px`;
    divEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divEl);
  }

  divBoxes.appendChild(fragment);
}

divBoxes.style.display = "flex";
divBoxes.style.alignItems = "center";

function destroyBoxes() {
  divBoxes.innerHTML = '';
  inputEl.value = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
