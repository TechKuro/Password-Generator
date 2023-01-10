// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

  // Initialize character type variables to false

  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;
  var counter= 0;
  var c2 = 0;

  // Loop until at least one character type is selected
  while (!lowercase && !uppercase && !numeric && !special) {
    lowercase = confirm("Include lowercase characters?");
    uppercase = confirm("Include uppercase characters?");
    numeric = confirm("Include numeric characters?");
    special = confirm("Include special characters ($@%&*, etc)?");

    if (!lowercase && !uppercase && !numeric && !special) {
      alert("Error: Must select at least one character type");
      counter ++
    }

    if(counter > 2) {
      alert("you have exceeded the maximum attempts, please try again!")
      break;
    }
  }

  var length = prompt("Enter the desired length of your password (minimum 10, maximum 64):");

  // Validate user input for password length
  while(length < 10 || length > 64) {
    alert("Password must be between 10 and 64 characters, please try again!");
    length = prompt("Enter the desired length of your password (minimum 10, maximum 64):");
    c2++

    if(c2 > 2) {
      alert("too many attempts, please start again!")
      break;
    }

  }

  // Return password options as an object
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
    length: length
  }
}








  // Function for getting a random element from an array

function getRandom(arr) {

  // Select a random index from the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  // Return the element at that index

  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  // Initialize possible character types
  var possibleCharacters = [];
  var password = "";
  
  // Push selected character types to possibleCharacters
  if (options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  
  if (options.uppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (options.numeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  
  if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  // Randomly select characters from the possibleCharacters and add them to the password
  for (var i = 0; i < options.length; i++) {
    var character = getRandom(possibleCharacters);
    password += character;
  }
  // Return the generated password
  return password;
}

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