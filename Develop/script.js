// Assignment code here

function generatePassword() {
  

  var characterList = {
    special: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='],
    numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowerCase: ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  var charTypes = {
    length: Number(prompt("Enter a password length between 8 and 128")), 
    numeric: confirm("Click ok to confirm including numeric characters"),
    lower: confirm("Click ok to confirm including lowercase characters"),
    upper: confirm("Click ok to confirm including uppercase characters"),
    special: confirm("Click ok to confirm including special characters")
  };
    if (charTypes.length > 8 || charTypes.length < 128) {
      alert("Password length must be between 8 to 128 characters.");
    };

  var finalPassword = [];
    if (charTypes.numeric === true) {
      var newPassword = characterList.numeric[Math.floor(Math.random()*characterList.numeric.length)];
      finalPassword.push(newPassword)
    } if (charTypes.lower === true) {
      var newPassword = characterList.lowerCase[Math.floor(Math.random()*characterList.lowerCase.length)];
      finalPassword.push(newPassword)
    } if (charTypes.upper === true) {
      var newPassword = characterList.upperCase[Math.floor(Math.random()*characterList.upperCase.length)];
      finalPassword.push(newPassword)
    } if (charTypes.special === true) {
      var newPassword = characterList.special[Math.floor(Math.random()*characterList.special.length)];
      finalPassword.push(newPassword)
    } else {
      console.log("Can't generate Password.")
    }
    console.log(">>>" + finalPassword + "<<<");
    return finalPassword.toString();
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