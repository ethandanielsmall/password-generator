function generatePassword() {

  let characterLower = window.confirm ("Would you like lower case letters?");
  let characterUpper = window.confirm ("Would you like upper case letters?");
  let characterNumbers = window.confirm ("Would you like numbers?");
  let characterSpecial = window.confirm ("Would you like special characters?");
  let characters = window.prompt ("How many characters long would you like your password?");
  var length = characters;

  lower = "aghijklwbcmnopqrstuvdefxyz";
  upper = "ASTHIJFGNOZBCDPQUVWRKLMXEY";
  numbers = "1567089234";
  special = "!@#$%&*";
  retVal = "";

  for (var i = 0; i < length; i++) {
    if (characterLower === true) {retVal += lower.charAt(Math.random() * 20)}
    if (characterUpper === true) {retVal += upper.charAt(Math.random() * 20)}
    if (characterNumbers === true) {retVal += numbers.charAt(Math.random() * 20)}
    if (characterSpecial === true) {retVal += special.charAt(Math.random() * 20)}
};
  return retVal.substring(0, length);
};

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