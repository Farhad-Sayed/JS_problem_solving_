// Problem 1040: Average 3

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
var [N1, N2, N3, N4] = inputs;

var average = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;

if (average >= 7.0) {
    print('Media: ' + average.toFixed(1));
    print('Aluno aprovado.');
}
else if (average < 5.0) {
    print('Media: ' + average.toFixed(1));
    print('Aluno reprovado.');
}
else if (average >= 5.0 && average <= 6.9) {
    var input = parseFloat(readline());
    print('Media: ' + average.toFixed(1));
    print('Aluno em exame.');
    print('Nota do exame: ' + input.toFixed(1));
    print('Aluno aprovado.');
    var final = (average + input) /2;
    print('Media final: ' + final.toFixed(1));
}
}

