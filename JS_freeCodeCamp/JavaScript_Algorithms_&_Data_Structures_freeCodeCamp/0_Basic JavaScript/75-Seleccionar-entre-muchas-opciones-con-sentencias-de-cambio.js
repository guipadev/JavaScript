/*
Seleccionar entre muchas opciones con sentencias de cambio

Si necesita hacer coincidir un valor con muchas opciones, puede usar una declaración de cambio. 
Una switch declaración compara el valor con las declaraciones de caso que definen varios valores posibles. 
Cualquier instrucción de JavaScript válida se puede ejecutar dentro de un bloque de casos y se ejecutará 
desde el primer case valor coincidente hasta que break se encuentre a.

Aquí hay un ejemplo de una switch declaración:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}

case los valores se prueban con igualdad estricta (===). 
Le break dice a JavaScript que deje de ejecutar declaraciones. Si se break omite, se ejecutará la siguiente instrucción.

Escriba una declaración de cambio que pruebe valy establezca answerlas siguientes condiciones:
1- alpha
2- beta
3- gamma
4-delta

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

*/

function caseInSwitch(val) {
  
  let answer = "";
  
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  
  return answer;
}

caseInSwitch(1);