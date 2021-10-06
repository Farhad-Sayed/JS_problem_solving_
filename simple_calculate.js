// Problem 1010: Simple Calculate

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
var inputs1 = readline().split(" ").map(x => x);
var inputs2 = readline().split(" ").map(y => y);

var unit1 = inputs1[1];
var unitPrice1 = inputs1[2];

var unit2 = inputs2[1];
var unitPrice2 = inputs2[2];


var product1 = parseInt(unit1) * parseFloat(unitPrice1);
var product2 = parseInt(unit2) * parseFloat(unitPrice2);

var total = (product1 + product2).toFixed(2);

print('VALOR A PAGAR: R$ ' + total);
}




