// Problem 1045: Triangle Types

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
var inputs = readline().split(' ').map(ele => +ele);
var sortedItem = inputs.sort((a, b) => b-a);
var [A, B, C] = sortedItem;

if (A >= B + C || B >= A + C  || C >= A + B ) {
    print('NAO FORMA TRIANGULO');
}
else if (A**2 == B**2 + C**2 || B**2 == A**2 + C**2 || C**2 == B**2 + A**2) {
    print('TRIANGULO RETANGULO');
}
else if (A**2 > B**2 + C**2 || B**2 > C**2 + A**2 || C**2 > B**2 + A**2) {
    print('TRIANGULO OBTUSANGULO');
}
else if (A**2 < B**2 + C**2 || B**2 < A**2 + C**2 || C**2 < B**2 + A**2) {
    print('TRIANGULO ACUTANGULO');
}
if (A == B && B == C) {
    print('TRIANGULO EQUILATERO');
}
if ((A == B && A != C) || (B == C && B != A) || (C == A && C != B)) {
    print('TRIANGULO ISOSCELES');
}
}
