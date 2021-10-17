// Problem 1051: Taxes

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
  var salary = parseFloat(readline());

  if (salary>=0.00 && salary<=2000.00) {
      print('Isento');
  }
  else if (salary>=2000.01 && salary<=3000.00) {
      print('R$ ' + ((salary - 2000) * 0.08).toFixed(2));
  }
  else if (salary>=3000.01 && salary<=4500.00) {
      print('R$ ' + (1000 * 0.08 + (salary - 3000) * .18).toFixed(2));
  }
  else if (salary>4500.00) {
      print('R$ ' + (1000 * .08 + 1500 * .18 + (salary - 4500) * 0.28).toFixed(2));
  }
}
