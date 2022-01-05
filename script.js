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
  console.log(choicesArray);
  for (var i=0; i < parseInt(promptLength); i++){
    var randomIndex = Math.floor(Math.random()*choicesArray.length); 
    finalPassword += choicesArray[randomIndex]
  }
  return finalPassword;
};
// }
// console.log(password);








// // Function for Lowercase letters - https://net-comber.com/charset.html
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random()*26)+97);
// }

// //function for Uppercase letters
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(math.random()*26)+65);
// }
// //function for numbers
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random()*10)+48)
// }
// //function for symbols
// function getRandomSymbols(){
//   var symbols = "!@#$%^&*(){}"
//   return symbols[Math.floor(Math.random()* symbols.length)];
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.onclick = function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();


