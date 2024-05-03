export function ConverterFromDecimal() {
    console.log('Decimal to Binary and Hexadecimal Converter');
    var decimalValue = parseInt(document.getElementById('decimal-input').value);
    let binary = '';
    let hexadecimal = '';
    let tempDecimal = decimalValue;
    while (tempDecimal > 0) {
        binary = (tempDecimal % 2) + binary;
        tempDecimal = Math.floor(tempDecimal / 2);
    }

    document.getElementById('binary-input').value = binary;

    if (binary.length % 4 !== 0) {
        binary = binary.padStart(binary.length + 4 - (binary.length % 4), '0');
    }

    for (let i = 0; i < binary.length; i += 4) {
        let binaryChunk = binary.slice(i, i + 4);
        let hexDigit = parseInt(binaryChunk, 2).toString(16);
        hexadecimal += hexDigit;
    }

    document.getElementById('hexadecimal-input').value = hexadecimal.toUpperCase();
}
