// Problem 1018: Banknotes

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
var N = parseInt(readline()); // quantity of banknotes

print(N);
print(Math.floor(N/100) + ' nota(s) de R$ 100,00');
N= N % 100;
print(Math.floor(N/50) + ' nota(s) de R$ 50,00');
N= N % 50;
print(Math.floor(N/20) + ' nota(s) de R$ 20,00');
N= N % 20;
print(Math.floor(N/10) + ' nota(s) de R$ 10,00');
N= N % 10;
print(Math.floor(N/5) + ' nota(s) de R$ 5,00');
N= N % 5;
print(Math.floor(N/2) + ' nota(s) de R$ 2,00');
N= N % 2;
print(Math.floor(N/1) + ' nota(s) de R$ 1,00');
}
