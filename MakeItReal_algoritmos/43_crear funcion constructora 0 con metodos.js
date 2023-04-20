/****************************************************
Ejercicio 43
Crea una funci�n constructora llamada Auto que no reciba ning�n argumento pero inicializa una propiedad 
llamada velocidad en 0.

Agrega dos m�todos al prototipo de la funci�n constructora:

acelerar: recibe un n�mero como argumento e incrementa la propiedad velocidad de acuerdo al n�mero.
frenar: recibe un n�mero como argumento y decrementa la propiedad velocidad de acuerdo al n�mero. 
Sin embargo, si la velocidad terminara siendo negativa debe quedar en 0.
Un ejemplo de c�mo utilizar�amos esta funci�n constructora:

// c�digo de prueba
const a1 = new Auto()
console.log(a1.velocidad) // 0

a1.acelerar(1)
a1.acelerar(2)
console.log(a1.velocidad) // 3

a1.frenar(2)
console.log(a1.velocidad) // 2
a1.frenar(3)
// la velocidad quedar�a en -1, as� que se deja en 0
console.log(a1.velocidad) // 0
*****************************************************/
function Auto(){
    this.velocidad = 0
  }
  
  Auto.prototype.acelerar = function(numero) {
    this.velocidad += numero
  }
  
  Auto.prototype.frenar = function(numero) {
    // Si n�mero es mayor que velocidad, velocidad queda en cero
    // De lo contrario, restar numero
    this.velocidad = (numero > this.velocidad) ? 0 : this.velocidad - numero;
    // No es necesario devolver un valor
  }
  
  // c�digo de prueba
  const a1 = new Auto()
  console.log(a1.velocidad) // 0
  
  a1.acelerar(1)
  a1.acelerar(2)
  console.log(a1.velocidad) // 3
  
  a1.frenar(2)
  console.log(a1.velocidad) // 1
  a1.frenar(3)
  // la velocidad quedar�a en -1, as� que se deja en 0
  console.log(a1.velocidad) // 0