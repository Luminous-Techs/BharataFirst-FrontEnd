console.log("Hello, custom-donate.js");

let amountInput = document.getElementById('amount');
var schemeAmount = document.querySelectorAll('input[type=radio][name="scheme-amount"]');
schemeAmount.forEach(radioBtn => radioBtn.addEventListener('change', () => {
    console.log("selected:", radioBtn.value);
    amountInput.value = radioBtn.value;
}));