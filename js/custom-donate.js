let amountInput = document.getElementById('amount');
let perksMsg = document.getElementById('perks');
var schemeAmount = document.querySelectorAll('input[type=radio][name="scheme-amount"]');
schemeAmount.forEach(radioBtn => radioBtn.addEventListener('change', () => {
    amountInput.value = radioBtn.value;
    perksMsg.style.color = "green";
    myPerks();
}));

function myPerks(){
    var amount = document.getElementById("amount").value;
    if(amount <= 0)
      document.getElementById("perks").innerHTML = "Your Perks will appear here";
    else if(amount < 10000)
      document.getElementById("perks").innerHTML = "Thanks For Donating Rs." + amount;
    else if(amount >= 10000 && amount < 25000)
      document.getElementById("perks").innerHTML = "Exclusive merchandise from Bharata First right at your doorstep!";
    else if(amount >= 25000 && amount < 50000)
      document.getElementById("perks").innerHTML = "Early access to all the seasons of The Great Indic Empires in high definition!";
    else if(amount >= 50000 && amount < 100000)
      document.getElementById("perks").innerHTML = "Get your hands on the glimpses of scenic and sublime locations captured via the most professional photography packed in a handpicked album cover just for you!";
    else if(amount >= 100000 && amount < 250000)
      document.getElementById("perks").innerHTML = "Become proud owners of customised mementos that will display your strong bond and loyal association with our initiative.";
    else if(amount >= 250000 && amount < 500000)
      document.getElementById("perks").innerHTML = "Grace our launch events as a dignitary and get early invites to all our mega events planned for the near future. You will also receive a carving in stone as an honorable acknowledgment for your contribution.";
    else if(amount >= 500000)
      document.getElementById("perks").innerHTML = "Enjoy a fully funded 2 night - 1 day stay at the place of shooting and explore the greatness of that enchanted land.";
}

function myVal(){
  for(var i=1; i<7; i++){
    document.getElementById('scheme-amount' + i).checked = false;
  }
}