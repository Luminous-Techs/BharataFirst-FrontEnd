let amountInput = document.getElementById('amount');
let perksMsg = document.getElementById('perks');
var schemeAmount = document.querySelectorAll('input[type=radio][name="scheme-amount"]');
schemeAmount.forEach(radioBtn => radioBtn.addEventListener('change', () => {
    amountInput.value = radioBtn.value;
    myPerks();
}));

function myPerks(){
    var amount = document.getElementById("amount").value;
    if(amount <= 0)
      document.getElementById("perks").innerHTML = "Your Perks will appear here";
    else if(amount < 10000)
      document.getElementById("perks").innerHTML = "Thanks For Donating Rs." + amount;
    else if(amount >= 10000 && amount < 25000)
      document.getElementById("perks").innerHTML = "Merchandise";
    else if(amount >= 25000 && amount < 50000)
      document.getElementById("perks").innerHTML = "DVD";
    else if(amount >= 50000 && amount < 100000)
      document.getElementById("perks").innerHTML = "Album";
    else if(amount >= 100000 && amount < 250000)
      document.getElementById("perks").innerHTML = "Customised Momento";
    else if(amount >= 250000 && amount < 500000)
      document.getElementById("perks").innerHTML = "Meet n Greet , Stone carving";
    else if(amount >= 500000)
      document.getElementById("perks").innerHTML = "Credits + Visit";
}

function myVal(){
  for(var i=1; i<7; i++){
    document.getElementById('scheme-amount' + i).checked = false;
  }
}