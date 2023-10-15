function displayInput(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function backspace() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

function calculate() {
    const displayValue = document.getElementById("display").value;
    const total = eval(displayValue);
    document.getElementById("display").value = total;
}