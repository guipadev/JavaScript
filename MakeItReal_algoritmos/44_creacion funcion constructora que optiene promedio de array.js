/*******************************************
Ejercicio 44
Agrega un m�todo llamado promedio a la funci�n constructora Array que retorne el 
promedio de los elementos en el arreglo:


// c�digo de prueba
console.log([1, 2, 3, 4].promedio()) // 2.5
console.log([7, 8, 9].promedio()) // 8
console.log([300, 100].promedio()) // 200
*******************************************************/

const arreglo1 = [1, 2, 3, 4]
const arreglo2 = [7, 8, 9]
const arreglo3 = [300, 100]

Array.prototype.promedio = function(){
  var total = 0;
  
  for (var i=0; i < this.length; i++) {
    total += this[i];
  }

  return total / this.length;
}

console.log(arreglo1.promedio()) // 2.5
console.log(arreglo2.promedio()) // 8
console.log(arreglo3.promedio()) // 200