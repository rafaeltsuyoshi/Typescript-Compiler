"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): undefined{
//     console.log('Result: ' + num)
//     return
// }
// function printResult(num: number): void{
//     console.log('Result: ' + num)
//     return
// }
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// Duvida funciona com os dois ?
// let combineValues: (a: number, b: number) => void
var combineValues;
combineValues = add;
// combineValues = printResult
// combineValues = 2
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
