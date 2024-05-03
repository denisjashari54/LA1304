import { ConverterFromHexa } from './hexa.js';
import { ConverterFromDecimal } from './decimal.js';
import { ConverterFromBinary } from './binary.js';

const dropdown = document.getElementById('conversion-type-dropdown');
const binaryInput = document.getElementById('binary-input');
const decimalInput = document.getElementById('decimal-input');
const hexadecimalInput = document.getElementById('hexadecimal-input');
const convertButton = document.getElementById('convert-button');

function resetAndSetInputMode(getValue) {
    binaryInput.value = '';
    decimalInput.value = '';
    hexadecimalInput.value = '';
    binaryInput.readOnly = true;
    decimalInput.readOnly = true;
    hexadecimalInput.readOnly = true;

    if (getValue === 'binary') {
        binaryInput.readOnly = false;
        convertButton.onclick = ConverterFromBinary;
    } else if (getValue === 'decimal') {
        decimalInput.readOnly = false;
        convertButton.onclick = ConverterFromDecimal;
    } else if (getValue === 'hexa') {
        hexadecimalInput.readOnly = false;
        convertButton.onclick = ConverterFromHexa;
    }
}

dropdown.addEventListener('change', (event) => {
    const selectedValue = dropdown.selectedOptions[0].value;
    console.log(selectedValue);
    resetAndSetInputMode(selectedValue);
});

const themeToggleButton = document.querySelector('.theme-toggle-button');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('lightmode');
});
