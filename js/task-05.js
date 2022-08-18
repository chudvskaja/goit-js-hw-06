let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');



inputEl.addEventListener('input', onInputChange);

function onInputChange (event) {

    if (inputEl.value === "") {
        outputEl.textContent = "Anonimus";

    }
    else {
        outputEl.textContent = event.currentTarget.value;
    }
       
}

onInputChange();

