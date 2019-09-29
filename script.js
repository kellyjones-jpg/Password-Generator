var strNumber="0123456789";
var strSpecial="!@#$%^&*()_-+=;:.?/";
var strUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strLower="abcdefghijklmnopqrstuvwxyz";
var strCharType="";

var iLength = prompt("Enter password length (must be between 8 and 128 characters:");
alert(iLength);

var type = confirm("Do you want to include special characters?");

var numeric = confirm("Do you want to include numeric characters?");

var lowercase = confirm("Do you want to include lowercase characters?");

var uppercase = confirm("Do you want to include uppercase characters?");


