// Problem 1005: average 1 

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
var A = parseFloat(readline());
var B = parseFloat(readline());

var weightedA = A * 3.5; 
var weightedB = B * 7.5; 

var MEDIA = ( (weightedA + weightedB) / 11 ).toFixed(5);

print('MEDIA = ' + MEDIA);
}