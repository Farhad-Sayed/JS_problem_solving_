// Problem 1019: Time Conversion

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
var seconds = parseInt(readline());

var hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
var minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

print(hours + ':' + minutes + ':' + seconds);
}
