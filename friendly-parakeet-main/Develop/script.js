// Assignment code here
// Prompt to choose password length between 8-128 characters
var promptLength
var numbersTrue
var symbolsTrue

var characters = ['a', 'b']

function generatePassword() {
promptLength = parseInt(window.prompt("How many characters would you like your password? (must be between 8 and 128)"));


  while (promptLength < 8 || promptLength > 128) {
    promptLength = window.prompt("Incorrect length input.  Please select a number between 8 and 128");
  
  }

  if(promptLength > 8 || promptLength< 128) {
    numbersTrue = confirm("will your password contain numbers?");
    symbolsTrue = confirm("will your password contain symbols?")
  }

  
};
//function to determine if input is within length parameters

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
writePassword();
