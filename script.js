// Password character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '$@%&*()_+-={}[]|/~`';

// Function to prompt user for password options
function getPasswordOptions() {
  const passwordLength = prompt('How many characters would you like your password to contain? (10-64)');
  const includeLowercase = confirm('Would you like to include lowercase characters?');
  const includeUppercase = confirm('Would you like to include uppercase characters?');
  const includeNumeric = confirm('Would you like to include numeric characters?');
  const includeSpecial = confirm('Would you like to include special characters?');
}

if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
  alert('Password length must be a number between 10 and 64!');
  return '';
}
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert('You must select at least one character type!');
  return '';
}

// Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input


// //Don't touch this
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
