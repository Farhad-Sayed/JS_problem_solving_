// Problem 1041: Coordinates Of A Point

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

let [X, Y] = inputs;

if (X === 0.0) {
    if(Y === 0.0) {
        print('Origem');
    }
    else{
        print('Eixo Y');
    }
}
else if (Y === 0.0) {
    if (X === 0.0) {
        print('Origem'); 
    }
    else{
        print('Eixo X');
    }
}
else if (X > 0.0 && Y > 0.0) {
    print('Q1');
}
else if (X < 0.0 && Y > 0.0) {
    print('Q2');
}
else if (X < 0.0 && Y < 0.0) {
    print('Q3');
}
else if (X > 0.0 && Y < 0.0) {
    print('Q4');
}
}
