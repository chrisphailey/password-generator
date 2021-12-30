// Assignment code here
// Prompt to choose password length between 8-128 characters
var promptLength
var numbersTrue
var symbolsTrue
var uppercaseTrue
var lowercaseTrue

var charactersLower = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var characterUpper = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//function to determine if input is within length parameters
function generatePassword() {
promptLength = parseInt(window.prompt("How many characters would you like your password? (must be between 8 and 128)"));


  while (promptLength < 8 || promptLength > 128) {
    promptLength = window.prompt("Incorrect length input.  Please select a number between 8 and 128");
  
  }
// prompts to choose character types (lowercase, uppercase, numeric, and/or special characters)
//atleast one character type should be selected
  if(promptLength > 8 || promptLength< 128) {
    numbersTrue = confirm("Will your password contain numbers?");
    symbolsTrue = confirm("Will your password contain symbols?");
    lowercaseTrue = confirm("Will your password contain lowercase letters?");
    uppercaseTrue = confirm("Will your password contain uppercase letters?");
  
  while (!numbersTrue && !symbolsTrue && !lowercaseTrue && !uppercaseTrue){
    window.alert ("You must select atleast one character type");
    numbersTrue = confirm("Will your password contain numbers?");
    symbolsTrue = confirm("Will your password contain symbols?");
    lowercaseTrue = confirm("Will your password contain lowercase letters?");
    uppercaseTrue = confirm("Will your password contain uppercase letters?");
  }
  }
};


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
