// Problem 1014: Consumption

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
var X = parseInt(readline());
var Y = parseFloat(readline());

var averageFuelConsumption = (X/Y).toFixed(3);

print(averageFuelConsumption + ' km/l');
}
