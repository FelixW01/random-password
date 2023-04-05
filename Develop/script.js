// Assignment code here

function generatePassword() {
  
  var finalPassword = [];
  var chosenChar = [];
  var characterList = {
    special: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='],
    numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowerCase: ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }
  var charLength = Number(prompt("Enter a password length between 8 and 128"));

  if (charLength < 8 || charLength > 128) {
    alert("Password length must be between 8 to 128 characters.");
    return generatePassword();
  }

  var charTypes = { 
    lower: confirm("Click ok to confirm including lowercase characters"),
    upper: confirm("Click ok to confirm including uppercase characters"),
    special: confirm("Click ok to confirm including special characters")
  };
  if (charTypes.lower == false && charTypes.upper == false && charTypes.special == false) {
    alert("Please choose at least 1 character type.");
    return generatePassword();
  }

    if (charTypes.numeric == true) {
      chosenChar.push(characterList.numeric)
    } if (charTypes.lower == true) {
      chosenChar.push(characterList.lowerCase)
    } if (charTypes.upper == true) {
      chosenChar.push(characterList.upperCase)
    } if (charTypes.special == true) {
      chosenChar.push(characterList.special)
    }


  const newChosenChar = chosenChar.flat(1)

    for (let i = 0; i < charLength; i++) {
      var randomIndex = Math.floor(Math.random()*newChosenChar.length);
      finalPassword.push(newChosenChar[randomIndex]); 
    }

    return finalPassword.join("");
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);