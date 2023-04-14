/*
Encadenamiento de sentencias If Else
if/else las declaraciones se pueden encadenar juntas para una lógica compleja. 
Aquí está el pseudocódigo de múltiples sentencias if/ encadenadas else if:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Escriba sentencias if/ encadenadas else if para cumplir las siguientes condiciones:

num < 5- regreso Tiny
num < 10- regreso Small
num < 15- regreso Medium
num < 20- regreso Large
num >= 20- regresoHuge

function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large"; 
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Change Me";
    }
}
  
testSize(7);