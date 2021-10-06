// Problem 1012: Area

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
var inputs = readline().split(' ').map(x => x);

var A = parseFloat(inputs[0]);
var B = parseFloat(inputs[1]);
var C = parseFloat(inputs[2]);
var pi = 3.14159

var trianguleArea = (1/2 * A * C).toFixed(3);
var circleArea = (pi * C**2).toFixed(3);
var trapiziumArea = (1/2 * (A + B) * C).toFixed(3);
var squareArea = (B**2).toFixed(3);
var ractangleArea = (A * B).toFixed(3);

print('TRIANGULO: ' + trianguleArea);
print('CIRCULO: ' + circleArea);
print('TRAPEZIO: ' + trapiziumArea);
print('QUADRADO: ' + squareArea);
print('RETANGULO: ' + ractangleArea);
}


