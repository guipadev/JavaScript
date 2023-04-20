"use strict";
// Diferencas de var vs let
var num1 = 10;
var num2 = 10;
if (num1 == 10) {
    var num1_1 = 44;
    var num2_1 = 55;
    console.log(num1_1, num2_1); //44 55
}
console.log(num1, num2); //10 55
