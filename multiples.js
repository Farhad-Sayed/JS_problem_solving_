// Problem 1044: Multiples 

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
let inputs = readline().split(' ').map(ele => +ele);
let [A, B] = inputs;

if (B % A === 0 || A % B ===0) {
    print('Sao Multiplos');
}
else{
    print('Nao sao Multiplos');
}
}

