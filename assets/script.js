// Assignment Code
var generateBtn = document.querySelector("#generate");

var chooseFrom = '';
var special = '`~!@#$%^&*()_+{}|:"<>?-=[]\;,./'; 
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';




// Write password to the #password input
function writePassword() {
    chooseFrom = '';
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


function generatePassword() {
    var ret = '';
    //get desired length of password from user
    var passLength = window.prompt("How many characters would you like your password to contain?");
    //if password length is too short
    if (passLength < 8) {
        window.alert("Not enough characters. Please enter a password length of at least 8.");
        return null;
    }
    else if (passLength > 128) { //if password length is too long
        window.alert("Too many characters. Please enter a password length less than 128 characters.");
        return null;
    }
    //click OK to confirm including special characters.
    var specialSel = window.confirm("Click OK to confirm including special characters.");
    if (specialSel) {
        chooseFrom += special;
    }
    //click OK to confirm including lowercase characters.
    var lowerSel = window.confirm("Click OK to confirm including lowercase characters.");
    if (lowerSel) {
        chooseFrom += lower;
    }
    //click OK to confirm including uppercase characters.
    var upperSel = window.confirm("Click OK to confirm including uppercase characters.");
    if (upperSel) {
        chooseFrom += upper;
    }
    //click OK to confirm including numeric characters.
    var numericSel = window.confirm("Click OK to confirm including numeric characters.");
    if (numericSel) {
        chooseFrom += numeric;
    }
    //validate user input: if user did not allow any kind of characters to be included in their password:
    if ((!specialSel && !lowerSel && !upperSel && !numericSel) || (chooseFrom.length === 0) ) {
        window.alert("Password must contain at least one type of character.");
        return null;
    }
    else { //choose a random character from the string of allowed characters and concatenate each char to the password one by one
        for (var i = 0; i < passLength; i++) {
            ret += chooseFrom.charAt(Math.random() * chooseFrom.length);
        }
    }

    return ret;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);