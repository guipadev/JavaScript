/*
Ejercicio 32
La funci�n calcularColor recibe un n�mero como argumento y retorna un string de acuerdo al n�mero:

Si el n�mero es 1 retorna "El color es negro".
Si el n�mero es 2 retorna "El color es blanco".
Si el n�mero es 3 retorna "El color es azul".
De lo contrario retorna "El color es verde".
El problema es que la funci�n tiene algunos errores y no est� funcionando. Tu misi�n es corregirla para que funcione correctamente seg�n lo anterior.

function calcuarColor() {
  if (num === 1) {
    let color = "black";
  } else (num = 2) {
    let color = "blanco":
  } else if (num === 3) {
    let color = "rojo";
  } else {
    let color = "verde";
  }

  return "El color es " + color;
}

// c�digo de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"
*/

function calcularColor(num) {
    if (num == 1) {
      var color = "negro";
    } else if (num == 2) {
      var color = "blanco";
    } else if (num == 3) {
      var color = "azul";
    } else {
      var color = "verde";
    }
    return `El color es ${color}`
  }
  
  // c�digo de prueba
  console.log(calcularColor(1)) // "El color es negro"
  console.log(calcularColor(2)) // "El color es blanco"
  console.log(calcularColor(3)) // "El color es azul"
  console.log(calcularColor(8)) // "El color es verde"
  
  
  
  