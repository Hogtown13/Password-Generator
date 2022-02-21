// Assignment code here
var letLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

function getRandomEl(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var chosenCharacters = [];
  var finalPass = []
  var length = parseInt(prompt("How many letters numbers and characters would you like to use. \n 8 - 128? "));
  if (length > 128 || length < 8 || isNaN(length)) {
    alert("Choose a number between 8 and 128")
    return null;
  }
  // confirm windows
  var lowerCase = confirm("Would you like to use lowercase letters. \n yes or no?")
  var upperCase = confirm("Would you like to use uppercase letters. \n yes or no?");
  var number = confirm("Would you like to use numbers. \n yes or no?");
  var character = confirm("Would you like to use special characters. \n yes or no?");
  if (!lowerCase && !upperCase && !number && !character) {
    alert("Please Choose at least one.")
    return null;
  }
  if (lowerCase) {
    chosenCharacters = chosenCharacters.concat(letLower)
  };
  if (upperCase) {
    chosenCharacters = chosenCharacters.concat(letA)
  };
  if (number) {
    chosenCharacters = chosenCharacters.concat(num)
  };
  if (character) {
    chosenCharacters = chosenCharacters.concat(charArray)
  };
  for (var i = 0; i < length; i++) {
    var chosenCharacter = getRandomEl(chosenCharacters)
    finalPass.push(chosenCharacter)
  }
  console.log(finalPass)
  return finalPass.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















