const inputEl = document.querySelector('input');
const numInput = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    const numberOfInputTegn = event.currentTarget.value.length;
    if(numberOfInputTegn !== numInput) {
        inputEl.classList.add('invalid');
    }
    else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }

}

