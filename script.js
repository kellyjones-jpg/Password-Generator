var strNumber="0123456789";
var strSpecial="!@#$%^&*()_-+=;:.?/";
var strUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strLower="abcdefghijklmnopqrstuvwxyz";
var strCharType="";
var cbxNumber="";
var cbxSpecial="";
var cbxUpper="";
var cbxLower="";

var iLength = prompt("Enter password length (must be between 8 and 128 characters:");
alert(iLength);

var type = window.confirm("Character types?")
