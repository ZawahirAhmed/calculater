let display = document.getElementById('display');
let history = document.getElementById('history');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
    addToHistory(display.value + ' = ' + result);
  } catch (error) {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  let li = document.createElement('li');
  li.textContent = entry;
  history.appendChild(li);
}
