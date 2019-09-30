var strNumber = "";
var strSpecial = "";
var strUpper = "";
var strLower = "";
var strCharType = "";
var temp = "";

// Get password length
var x = prompt("Enter password length (must be between 8 and 128 characters):");

// Select character types to use in password
while (strCharType.length === 0) 
{
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

    if (strCharType.length === 0) 
    {
        alert("You must select at least one character type.")
    };
};

// Generate the password
function generatePassword(iPswdLength) 
{
    temp = "";
    for (i = 0; i < iPswdLength; i++) 
    {
        temp += strCharType.charAt(Math.floor(Math.random() * strCharType.length))
    };
    document.getElementById("password").innerHTML = temp;
};

// Copy to clipboard
function copyPassword()
{
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied password to clipboard.");
};