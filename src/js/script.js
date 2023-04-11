let display = document.getElementById('result');

function appendToDisplay(value) {
	display.value += value;
}

function clearDisplay() {
	display.value = '';
}

function calculateResult() {
	display.value = eval(display.value);
}

const deleteBtn = document.getElementById('delete-btn');
const inputNumber = document.getElementById('input-number');

deleteBtn.addEventListener('click', () => {
  const text = display.value;
  const newText = text.substring(0, text.length - 1);
  display.value = newText;
});