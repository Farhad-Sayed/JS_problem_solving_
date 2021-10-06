// Problem 1043: Triangle

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
var [A, B, C] = inputs;

var perimeter = A + B + C;
var trapizium = (A + B) * C;
var area = trapizium / 2;

if (A+ B > C && C+ A > B && B+ C > A) {
    print('Perimetro = ' + perimeter.toFixed(1));
}
else{
    print('Area = ' + area.toFixed(1));  
}
}
