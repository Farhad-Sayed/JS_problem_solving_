// Problem 1049: Animal

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
  var input1 = readline().toLowerCase();
  var input2 = readline().toLowerCase();
  var input3 = readline().toLowerCase();
  
  if (input1 == 'vertebrado') {
      if (input2 == 'ave') {
          if (input3 == 'carnivoro') {
              print('aguia');
          }
          else {
              print('pomba');
          }
      }
      else if (input2 == 'mamifero') {
          if (input3 == 'onivoro') {
              print('homem');
          }
          else {
              print('vaca');
          }
      }
  }
  else if (input1 == 'invertebrado') {
      if (input2 == 'inseto') {
          if (input3 == 'hematofago') {
              print('pulga');
          }
          else {
              print('lagarta');
          }
      }
      else if (input2 == 'anelideo') {
          if (input3 == 'hematofago') {
              print('sanguessuga');
          }
          else {
              print('minhoca');
          }
      }
  }
  
}

