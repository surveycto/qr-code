/* global QRCode, fieldProperties, setAnswer, getPluginParameter */

// Get the input value from the plugin parameter
var codeValue = getPluginParameter('code');

// Get references to HTML elements
var labelEl = document.getElementById('label');
var hintEl = document.getElementById('hint');
var qrCodeEl = document.getElementById('qr-code');
var errorMessageEl = document.getElementById('error-message');

// Set the label and hint
labelEl.innerText = fieldProperties.LABEL;
hintEl.innerText = fieldProperties.HINT;

// Function to generate QR code
function generateQRCode(value) {
    qrCodeEl.innerHTML = ''; // Clear previous QR code
    
    // Calculate size based on string length
    var size = Math.max(256, Math.min(512, 256 + Math.floor(value.length / 2)));
    
    // Calculate QR version based on string length
    var qrVersion = Math.min(40, Math.max(1, Math.ceil(value.length / 100)));
    
    new QRCode(qrCodeEl, {
        text: value,
        width: size,
        height: size,
        correctLevel: QRCode.CorrectLevel.M,
        version: qrVersion
    });
}

// Check if code value is provided
if (codeValue && codeValue.trim() !== '') {
    generateQRCode(codeValue);
    errorMessageEl.classList.add('hidden');
} else {
    errorMessageEl.classList.remove('hidden');
}

// Set the field's answer to the code value (optional, depends on your requirements)
setAnswer(codeValue);
