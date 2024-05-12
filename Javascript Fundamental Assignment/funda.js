// sender's information
const senderInfo = {
    name: "Fidel Umoh",
    accountNumber: "123456789",
    bank: "Access Bank",
    withdrawalPin: "1234"
  };

  let userInput = prompt("Insert your card by typing 'YES' or 'NO':"); 
if (userInput !== null) { userInput =
   userInput.toLowerCase(); 
   
   if (userInput === 'yes') { 
    alert("Card inserted successfully!");
   } else if (userInput === 'no') { 
    alert("No card inserted.");
   } else { 
    alert("Invalid input. Please type 'yes' or 'no'.");
   }
   } else { alert("No input provided.");

  }

  // my initial balance
  let balance = 5000;
  
  // FOR menu and handling user choices
  function showMenu() {
    let choice = prompt(
      `Welcome to Access Bank PLC\n\nYour Account Details;\n\nAccount Name: ${senderInfo.name}\nAccount Number: ${senderInfo.accountNumber}\nBank: ${senderInfo.bank}\n\nCurrent Balance: $${balance}\n\nChoose an option:\n1. Transfer Money\n2. Deposit Money\n3. Withdraw Money\n4. Exit`
    );
  
    switch (choice) {
      case "1":
        transferMoney();
        break;
      case "2":
        depositMoney();
        break;
      case "3":
        withdrawMoney();
        break;
      case "4":
        confirmExit();
        break;
      default:
        alert("Invalid choice. Please try again.");
        showMenu();
    }
  }
    

      let recieverInfo = {
        name: "Idara James",
        accountNumber: "0055555555",
        bank: "SunTrust Bank",
        withdrawalPin: "1234"
      };
      
      function transferMoney() {
    let pin = prompt("Enter your PIN:");
    if (pin !== recieverInfo.withdrawalPin) {
      alert("Incorrect PIN. Please try again.");
      transferMoney();
    } else {
      let account = prompt("Enter Reciever Account number:");
      if (account !== recieverInfo.accountNumber) {
        alert("Incorrect account number. Please try again.");
        transferMoney();
    } else {
        let amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (isNaN(amount) || amount <= 0 || amount > balance) {
          alert("Invalid amount or insufficient funds. Please try again.");
          transferMoney();
    } else {
      balance -= amount;

      let usersInput = prompt(" Please  type 'YES' or 'NO' to confirm recievers Details \n\nReciever: Idara James \nBank: SunTrust Bank\nAccount Number: 0055555555 "); 
      if (usersInput !== null) { usersInput =
         usersInput.toLowerCase(); 
         
         if (usersInput === 'yes') { 
          alert("Reciever Details Confirmed!");
         } else if (usersInput === 'no') { 
          alert("Reciever Details not Confirmed!");
         } else { 
          alert("Invalid input. Please type 'yes' or 'no'.");
         }
         } else { alert("No input provided.");
      
        }
        
        alert(`Withdrawal of $${amount} successful. New balance: $${balance}`);
          showMenu();
        }
      }
    }
  }

  //  for making deposit
  function depositMoney() {
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount. Please try again.");
      depositMoney();
    } else {
      balance += amount;
      alert(`Deposit of $${amount} successful. New balance: $${balance}`);
      showMenu();
    }
  }
  
  // to make withdraw
  function withdrawMoney() {
    let pin = prompt("Enter your withdrawal PIN:");
    if (pin !== senderInfo.withdrawalPin) {
      alert("Incorrect PIN. Please try again.");
      withdrawMoney();
    } else {
      let accountNumber = prompt("Enter your account number:");
      if (accountNumber !== senderInfo.accountNumber) {
        alert("Incorrect account number. Please try again.");
        withdrawMoney();
      } else {
        let amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (isNaN(amount) || amount <= 0 || amount > balance) {
          alert("Invalid amount or insufficient funds. Please try again.");
          withdrawMoney();
        } else {
          balance -= amount;
          alert(`Withdrawal of $${amount} successful. New balance: $${balance}`);
          showMenu();
        }
      }
    }
  }
  
  // my  exit confirmation
  function confirmExit() {
    let confirmExit = confirm("Are you sure you want to exit?");
    if (confirmExit) {
      alert("Thank you for using Access Bank. Goodbye!");
    } else {
      showMenu();
    }
  }
  showMenu();