function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
  } catch (error) {
      alert('Expressão Inválida');
  }
}
