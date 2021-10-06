// Problem 1036: Bhaskar's formula

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
var inputs = readline().split(' ').map(x => +x);
var [A, B, C] = inputs;

var R1 = (-B + (B**2 - 4* C * A)**.5)/(2 * A);
var R2 = (-B - (B**2 - 4* C * A)**.5)/(2 * A);

if ((B**2 - 4* C * A) < 0 || A ==0 ) {
    print('Impossivel calcular');
}
else{
    print('R1 = ' + R1.toFixed(5));
    print('R2 = ' + R2.toFixed(5));
}

}
