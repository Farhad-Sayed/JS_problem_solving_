// Problem 1017: Fuel Spent

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
  // code goes here\
var time = parseInt(readline());
var average_speed = parseInt(readline());

var distance = time * average_speed;
var fuelNeeded = (distance/12).toFixed(3);

print(fuelNeeded);
}
