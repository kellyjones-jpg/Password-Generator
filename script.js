var strNumber = "";
var strSpecial = "";
var strUpper = "";
var strLower = "";
var strCharType = "";
var temp = "";

var iPswdLength = prompt("Enter password length (must be between 8 and 128 characters):");

while (strCharType.length === 0) {
    var answer = confirm("Do you want to include special characters?");
    if (answer === true) 
    {
        strSpecial = "!@#$%^&*()_-+=;:.?/"
    };

    answer = confirm("Do you want to include numeric characters?");
    if (answer === true) 
    {
        strNumber = "0123456789";
    };

    answer = confirm("Do you want to include lowercase characters?");
    if (answer === true) 
    {
        strLower = "abcdefghijklmnopqrstuvwxyz";
    };

    answer = confirm("Do you want to include uppercase characters?");
    if (answer === true) 
    {
        strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    strCharType = strSpecial.concat(strNumber, strLower, strUpper);

    // "if your string character type . length = 0, put confirm saying'must select at least one character type'"
    if (strCharType.length === 0) {
        alert("You must select at least one character type.")
    };
};

function generatePassword(iPswdLength) {
    temp = "";
    for (i = 0; i < iPswdLength; i++) {
        temp += strCharType.charAt(Math.floor(Math.random() * strCharType.length))
            };
            return temp
};