let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterMail = document.getElementById("enterMail").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText)

   if (enterAmount > myAccountBalance) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterMail + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      myAccountBalance = myAccountBalance - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      ₹${enterAmount} is sent to ${enterName}`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to ${enterName} with Email-id ${enterMail}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

