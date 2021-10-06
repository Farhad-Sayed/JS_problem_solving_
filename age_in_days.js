// Problem 1020: Age In Days

"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
  // code goes here
var days = parseInt(readline());

var years = Math.floor(days / 365);
days = days % 365;
var months = Math.floor(days / 30);
days = days % 30;

print(years + ' ano(s)\n' + months + ' mes(es)\n' + days + ' dia(s)');
}
