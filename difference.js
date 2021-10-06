// Problem 1007: Difference

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
var A = parseInt(readline());
var B = parseInt(readline());
var C = parseInt(readline());
var D = parseInt(readline());

var productAB = A * B;
var productCD = C * D;

var DIFERENCA = productAB - productCD;

print('DIFERENCA = ' + DIFERENCA);
}