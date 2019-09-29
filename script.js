var strNumber="";
var strSpecial="";
var strUpper="";
var strLower="";
var strCharType="";
var value=true;

var iLength = prompt("Enter password length (must be between 8 and 128 characters:");
alert(iLength);

while (value === true) {
    var answer = confirm("Do you want to include special characters?");
    if (answer === true) {
        strSpecial="!@#$%^&*()_-+=;:.?/"
    };

    answer = confirm("Do you want to include numeric characters?");
    if (answer === true) {
        strNumber="0123456789";
    };

    answer = confirm("Do you want to include lowercase characters?");
    if (answer === true) {
        strLower="abcdefghijklmnopqrstuvwxyz";
    };

    answer = confirm("Do you want to include uppercase characters?");
    if (answer === true) {
        strUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    strCharType=strSpecial.concat(strNumber, strLower, strUpper);
};