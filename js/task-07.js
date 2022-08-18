const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', onInputChange);

function onInputChange (event) {
    const range = event.currentTarget.value;
    spanEl.style.fontSize = `${range}px`;
}


