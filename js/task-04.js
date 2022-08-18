
let counterValue = document.querySelector('#value');
let decrementBtn = document.querySelector("[data-action = 'decrement']");
let incrementBtn = document.querySelector("[data-action = 'increment']");

let count = 0;
updateDisplay();

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
    counterValue.innerHTML = count;
}




