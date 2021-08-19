// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpper;
var comfirmLower;

function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    while(confirmLength <= 7 || confirmLength >= 129) {
        alert("Password must be between 8-128 characters");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 

        var confirmSpecial = confirm("Click OK to include special characters");
        var confirmNumeric = confirm("Click OK to include numeric characters");    
        var comfirmLower = confirm("Click OK to include lowercase characters");
        var confirmUpper = confirm("Click OK to include uppercase characters");
        while(confirmUpper === false && comfirmLower === false && confirmSpecial === false && confirmNumeric === false) {
            alert("You must choose at least one parameter");
            var confirmSpecial = confirm("Click OK to include special characters");
            var confirmNumeric = confirm("Click OK to include numeric characters");    
            var comfirmLower = confirm("Click OK to include lowercase characters");
            var confirmUpper = confirm("Click OK to include uppercase characters");   
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
