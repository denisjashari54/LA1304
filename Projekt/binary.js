export function ConverterFromBinary() {
    console.log('Binary to Decimal and Hexadecimal Converter');
    var binaryValue = document.getElementById('binary-input').value;
    let decimal = 0;

    for (let i = 0; i < binaryValue.length; i++) {
        decimal = decimal * 2 + parseInt(binaryValue[i]);
    }

    document.getElementById('decimal-input').value = decimal;

    let hexString = '';
    let paddedBinary = binaryValue.padStart(binaryValue.length + 4 - binaryValue.length % 4, '0');

    for (let i = 0; i < paddedBinary.length; i += 4) {
        let binaryChunk = paddedBinary.substring(i, i + 4);
        let hexValue = parseInt(binaryChunk, 2).toString(16);
        hexString += hexValue;
    }

    document.getElementById('hexadecimal-input').value = hexString.toUpperCase();
}
