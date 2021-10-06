// Probelem 1047: Game Time With Minute.

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
var inputs = readline().split(' ').map(ele => +ele);
var [initiaHour, initialMin, endHour, endMin] = inputs;

if(endMin < initialMin){
    endMin += 60;
    endHour -= 1;
    endMin -= initialMin;
    if (endHour < initiaHour) {
        endHour += 24;
        endHour -= initiaHour;
    }
    else{
        endHour -= initiaHour;
    }
    print('O JOGO DUROU ' + endHour + ' HORA(S) E ' + endMin  +' MINUTO(S)');
}
else if (endHour == initiaHour && endMin == initialMin) {
    print('O JOGO DUROU '+ 24 + ' HORA(S) E ' + 0 + ' MINUTO(S)');
}
else if (endMin > initialMin) {
    endMin -= initialMin;
    if (endHour < initiaHour) {
        endHour += 24;
        endHour -= initiaHour;
    }
    else{
        endHour -= initiaHour;
    }
    print('O JOGO DUROU ' + endHour + ' HORA(S) E ' + endMin  +' MINUTO(S)');
}
}
