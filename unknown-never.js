"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {}
}
var result = generateError('An error ocurred', 500);
console.log(result);
