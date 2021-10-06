// Problem 1046: Game Time

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
var [start, end] = inputs;

if (end > start) {
    print('O JOGO DUROU ' + (end - start) + ' HORA(S)');
}
else if (start > end) {
    print('O JOGO DUROU ' + (24 - start + end) + ' HORA(S)');
}
else{
    print('O JOGO DUROU ' + 24 + ' HORA(S)');
}
}
