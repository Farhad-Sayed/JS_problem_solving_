// Problem 1050: DDD

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
var phoneDialing = parseInt(readline());

if (phoneDialing === 61) {
    print('Brasilia');
}
else if (phoneDialing === 71) {
    print('Salvador');
}
else if (phoneDialing === 11) {
    print('Sao Paulo');
}
else if (phoneDialing === 21) {
    print('Rio de Janeiro');
}
else if (phoneDialing === 32) {
    print('Juiz de Fora');
}
else if (phoneDialing === 19) {
    print('Campinas');
}
else if (phoneDialing === 27) {
    print('Vitoria');
}
else if (phoneDialing === 31) {
    print('Belo Horizonte');
}
else {
    print('DDD nao cadastrado');
}
}
