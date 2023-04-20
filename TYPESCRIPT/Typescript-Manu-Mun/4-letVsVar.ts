// Diferencas de var vs let

var num1: number = 10;
var num2: number = 10;

if (num1 == 10){
    let num1 = 44;
    let num2 = 55;

    console.log(num1, num2); //44 55
}

console.log(num1, num2); //10 55