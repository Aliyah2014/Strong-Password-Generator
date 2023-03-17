// Password character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '$@%&*()_+-={}[]|/~`';

// Function to prompt user for password options
function generatePassword() {
  // Prompt user for password criteria
  const passwordLength = prompt('How many characters would you like your password to contain? (10-64)');
  const includeLowercase = confirm('Would you like to include lowercase characters?');
  const includeUppercase = confirm('Would you like to include uppercase characters?');
  const includeNumeric = confirm('Would you like to include numeric characters?');
  const includeSpecial = confirm('Would you like to include special characters?');

  // To validate users choice of password
  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert('Password length must be a number between 10 and 64!');
    return '';
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('You must select at least one character type!');
    return '';
  }

 // variable declaration to generate password with user input
  let password = '';
  let charSet = '';
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumeric) charSet += numericChars;
  if (includeSpecial) charSet += specialChars;
  for (let i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
}

// Event listener for generate button
document.getElementById('generate').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  passwordField.value = generatePassword();
});
