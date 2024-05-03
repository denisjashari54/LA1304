export function ConverterFromHexa() {
    var hexValue = document.getElementById('hexadecimal-input').value.toLowerCase();
    let decimal = 0;

    for (let i = 0; i < hexValue.length; i++) {
        let currentChar = hexValue[hexValue.length - 1 - i];
        if (currentChar >= 'a' && currentChar <= 'f') {
            decimal += (currentChar.charCodeAt(0) - 87) * (16 ** i);
        } else if (currentChar >= '0' && currentChar <= '9') {
            decimal += parseInt(currentChar) * (16 ** i);
        } else {
            console.error("Ungültige Hexadezimalzeichen gefunden: " + currentChar);
            return;
        }
    }

    document.getElementById('decimal-input').value = decimal;
    let binary = '';
    let tempDecimal = decimal;
    do {
        binary = (tempDecimal % 2) + binary;
        tempDecimal = Math.floor(tempDecimal / 2);
    } while (tempDecimal !== 0);

    document.getElementById('binary-input').value = binary;
}
