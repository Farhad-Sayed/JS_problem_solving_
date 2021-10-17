// Problem 1048: Salary Increase

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

  if (salary >= 0 && salary <= 400.00) {
      print('Novo salario: ' + ((salary * 115) / 100).toFixed(2));
      print('Reajuste ganho: ' + ((salary * 15) / 100).toFixed(2));
      print('Em percentual: ' + 15 + ' %');
  }
  else if (salary >= 400.01 && salary <= 800.00) {
      print('Novo salario: ' + ((salary * 112) / 100).toFixed(2));
      print('Reajuste ganho: ' + ((salary * 12) / 100).toFixed(2));
      print('Em percentual: ' + 12 + ' %');
  }
  else if (salary >= 800.01 && salary <= 1200.00) {
      print('Novo salario: ' + ((salary * 110) / 100).toFixed(2));
      print('Reajuste ganho: ' + ((salary * 10) / 100).toFixed(2));
      print('Em percentual: ' + 10 + ' %');
  }
  else if (salary >= 1200.01 && salary <= 2000.00) {
      print('Novo salario: ' + ((salary * 107) / 100).toFixed(2));
      print('Reajuste ganho: ' + ((salary * 7) / 100).toFixed(2));
      print('Em percentual: ' + 7 + ' %');
  }
  else if (salary > 2000) {
      print('Novo salario: ' + ((salary * 104) / 100).toFixed(2));
      print('Reajuste ganho: ' + ((salary * 4) / 100).toFixed(2));
      print('Em percentual: ' + 4 + ' %');
  }
}
