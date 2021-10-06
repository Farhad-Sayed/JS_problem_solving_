// Problem 1035: Selection Test 1 

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
var inputs = readline().split(' ').map(x => x);
// destructuring the map array
var [A, B, C, D] = inputs;

function selectionTest(a, b, c, d){
    if ((b > c && d > a) && (c + d > a+b) && (c >= 0 && d >= 0) && a % 2 == 0) {
        return 'Valores aceitos';
    }
    else{
        return 'Valores nao aceitos';
    }
}
print(selectionTest(A, B, C, D));
}
