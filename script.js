// Assignment code here
// Prompt to choose password length between 8-128 characters
var promptLength
var numbersTrue
var symbolsTrue
var uppercaseTrue
var lowercaseTrue
var choicesArray = "";
var finalPassword = "";

var characterLower = "abcdefghijklmnopqrstuvwxyz";
var characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterNumber = "0123456789";
var characterSymbol = "!@#$%^&*()";

//function to determine if input is within length parameters
function generatePassword() {
  finalPassword = "";
  choicesArray = "";
  promptLength = parseInt(window.prompt("How many characters would you like your password? (must be between 8 and 128)"));


  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128) {
    promptLength = window.prompt("Incorrect length input.  Please select a number between 8 and 128");
  
  }
// prompts to choose character types (lowercase, uppercase, numeric, and/or special characters)
//atleast one character type should be selected
  if(promptLength > 8 || promptLength< 128) {
    numbersTrue = confirm("Will your password contain numbers?");
    symbolsTrue = confirm("Will your password contain symbols?");
    lowercaseTrue = confirm("Will your password contain lowercase letters?");
    uppercaseTrue = confirm("Will your password contain uppercase letters?");
  }
  while (!numbersTrue && !symbolsTrue && !lowercaseTrue && !uppercaseTrue){
    window.alert ("You must select atleast one character type");
    numbersTrue = confirm("Will your password contain numbers?");
    symbolsTrue = confirm("Will your password contain symbols?");
    lowercaseTrue = confirm("Will your password contain lowercase letters?");
    uppercaseTrue = confirm("Will your password contain uppercase letters?");
  };
  if (numbersTrue) choicesArray += characterNumber;
  if (symbolsTrue) choicesArray += characterSymbol;
  if (lowercaseTrue) choicesArray += characterLower;
  if (uppercaseTrue) choicesArray += characterUpper;
  for (var i=0; i < parseInt(promptLength); i++){
    var randomIndex = Math.floor(Math.random()*choicesArray.length); 
    finalPassword += choicesArray[randomIndex]
  }
  return finalPassword;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


