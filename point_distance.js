// Problem 1015: Distance Between Two Points

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
var inputs1 = readline().split(' ').map(xy => +xy);
var inputs2 = readline().split(' ').map(yx => +yx);

var [x1, y1] = inputs1;
var [x2, y2] = inputs2;

var Distance = ((x2 - x1)**2 + (y2 - y1)**2)**(1/2);

print(Distance.toFixed(4));

}
