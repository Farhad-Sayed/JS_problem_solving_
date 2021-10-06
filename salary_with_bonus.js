// Problem 1009: Salary With Bonus

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
var sellerName= readline();
var fixedSalary = parseFloat(readline());
var totalSales = parseFloat(readline());

var commission = (totalSales * 0.15);

var finalSalary = (salary, comm) => salary + comm;

var total = (finalSalary(fixedSalary, commission)).toFixed(2);

print('TOTAL = R$ ' + total);
}

