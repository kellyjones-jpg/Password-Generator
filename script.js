var strNumber="0123456789";
var strSpecial="!@#$%^&*()_-+=;:.?/";
var strUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strLower="abcdefghijklmnopqrstuvwxyz";
var strCharType="";

var iLength = prompt("Enter password length (must be between 8 and 128 characters:");
alert(iLength);

var answer = confirm("Do you want to include special characters?");
if (answer === true) {
    strSpecial="!@#$%^&*()_-+=;:.?/"
};

answer = confirm("Do you want to include numeric characters?");
if (answer === true) {
    strCharType = 
};

answer = confirm("Do you want to include lowercase characters?");
if (answer === true) {
    strCharType =
};

answer = confirm("Do you want to include uppercase characters?");
if (answer === true) {
    strCharType = 
};


