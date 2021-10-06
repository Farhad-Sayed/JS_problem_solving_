// Problem 1011: Sphere

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
var R = parseFloat(readline());
var pi = 3.14159;

var sphereVolume = (4.0/3) * pi * R**3;

print('VOLUME = ' + sphereVolume.toFixed(3));
}
