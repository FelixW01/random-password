// Assignment code here

function generatePassword() {
  

  var characterList = {
    special: ['!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'],
    numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowercase: ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  var charTypes = {
    length: Number(prompt("Enter a password length between 8 and 128")), 
    numeric: confirm("Click ok to confirm including numeric characters"),
    // special: confirm("Click ok to confirm including special characters"),
    lower: confirm("Click ok to confirm including lowercase characters"),
    // upper: confirm("Click ok to confirm including uppercase characters")
  };
  var finalPassword = [];
  if (charTypes.numeric === true) {
    var newPassword = characterList.numeric[Math.floor(Math.random()*characterList.numeric.length)];
    finalPassword.push(newPassword)
    console.log(finalPassword)
  } else if {
    
  }
  else {
    console.log("Can't generate Password.")
  }


  return finalPassword;
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
