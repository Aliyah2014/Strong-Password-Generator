// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

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
  // return '';
}
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert('You must select at least one character type!');
  // return '';
}

// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {
  let password = '';
  let charSet = '';
  if (includeLowercase) charSet += lowerCasedCharacters;
  if (includeUppercase) charSet += upperCasedCharacters;
  if (includeNumeric) charSet += numericCharacters;
  if (includeSpecial) charSet += specialCharacters;
  for (let i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
}


document.getElementById('generate').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  passwordField.value = generatePassword();
});

// //Don't touch this
// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);