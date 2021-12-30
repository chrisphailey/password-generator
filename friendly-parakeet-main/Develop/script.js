// Assignment code here
// Prompt to choose password length between 8-128 characters
var promptLength = window.prompt("How many characters would you like your password? (must be between 8 and 128)");
  console.log("Password length of " + promptLength + " has been selected");


//function to determine if input is within length parameters
var passwordLength = function(){
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Incorrect length input.  Please select a number between 8 and 128");
  }
}
// prompts to choose character types (lowercase, uppercase, numeric, and/or special characters)
//atleast one character type should be selected

//Password generate after all promts are answered

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

passwordLength();
