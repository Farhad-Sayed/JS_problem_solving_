// Problem 1038: Snack

var inputs = readline().split(' ').map(x => +x);

var [productCode, quantity] = inputs;

var productDetails = [
    {
        code: 1,
        price: 4.00
    },
    {
        code: 2,
        price: 4.50
    },
    {
        code: 3,
        price: 5.00
    },
    {
        code: 4,
        price: 2.00
    },
    {
        code: 5,
        price: 1.50
    }
]

productDetails.map(element => {
    if (element.code == productCode) {
       var output = element.price * quantity; 
       print('Total: R$ ' + output.toFixed(2));
    }    
});
// for(var element in productDetails){
//     if (element['code'] == productCode) {
//         var result = element['price'] * quantity; 
//     }
// }


// print(result);


// "use strict";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
 
// function print(x) {
//   console.log(x);
// }
// let inputString = "";
// let currentLine = 0;
 
// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });
// process.stdin.on("end", () => {
//   inputString = inputString.split("\n");
//   main();
// });
// function readline() {
//   return inputString[currentLine++];
// }
 
// // ********** Code Start **********

// function main() {
//   // code goes here
// var inputs = readline().split(' ').map(x => +x);
// var [code, quantity] = inputs;

// if (code === 1) {
//     print('Total: R$ ' + (quantity * 4.00).toFixed(2));
// }
// else if (code === 2) {
//     print('Total: R$ ' + (quantity * 4.50).toFixed(2));
// }
// else if (code === 3) {
//     print('Total: R$ ' + (quantity * 5.00).toFixed(2));
// }
// else if (code === 4) {
//     print('Total: R$ ' + (quantity * 2.00).toFixed(2));
// }
// else if (code === 5) {
//     print('Total: R$ ' + (quantity * 1.50).toFixed(2));
// }
// }
