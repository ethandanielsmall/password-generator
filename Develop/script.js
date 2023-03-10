// Assignment code here

let characterLower = window.confirm ("Would you like lower case letters?");
let characterUpper = window.confirm ("Would you like upper case letters?");
let characterNumbers = window.confirm ("Would you like numbers?");
let characterSpecial = window.confirm ("Would you like special characters?");
let characterLength = window.prompt("How many characters long would you like your password?");

function generatePassword() {
  var length = characterLength;
      lower = "aghijklwbcmnopqrstuvdefxyz";
      upper = "ASTHIJFGNOZBCDPQUVWRKLMXEY";
      numbers = "1567089234";
      special = "!@#$%^&*";
      retVal = "";

  for (var i = 0, n = characterLength; i < length; ++i) {
      retVal += lower.charAt(Math.random() * n)
      retVal += upper.charAt(Math.random() * n)
      retVal += numbers.charAt(Math.random() * n)
      retVal += special.charAt(Math.random() * n)
  };
  return retVal.substring(0, length);
};

// ------------------------------------------------------------------------

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

// ------------------------------------------------------------------------

// expectations

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than
// 128 characters

// ------------------------------------------------------------------------

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric,
// and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should
// be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page