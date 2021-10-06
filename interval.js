// Problem 1037: Interval

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
var input = parseFloat(readline());

if (input >= 0 && input <= 25) {
    print('Intervalo [0,25]');
}
else if (input > 25 && input <= 50) {
    print('Intervalo (25,50]');
}
else if (input > 50 && input <= 75) {
    print('Intervalo (50,75]');
}
else if (input > 75 && input <= 100) {
    print('Intervalo (75,100]');
}
else{
    print('Fora de intervalo');
}
}
