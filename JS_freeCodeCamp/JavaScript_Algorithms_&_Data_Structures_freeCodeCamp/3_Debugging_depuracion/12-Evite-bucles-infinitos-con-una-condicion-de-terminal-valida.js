/*
Evite bucles infinitos con una condición de terminal válida

El tema final es el temido bucle infinito. 
Los bucles son excelentes herramientas cuando necesita que su programa ejecute un bloque
de código una cierta cantidad de veces o hasta que se cumpla una condición, 
pero necesitan una condición de terminal que finalice el bucle. 
Es probable que los bucles infinitos congelen o bloqueen el navegador y provoquen 
un caos general en la ejecución del programa, lo que nadie quiere.

Había un ejemplo de un bucle infinito en la introducción de esta sección: 
no tenía una condición terminal para salir del while bucle interior loopy(). 
¡NO llame a esta función!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}

El trabajo del programador es asegurarse de que finalmente se alcance la condición 
de terminal, que le dice al programa cuándo salir del código de bucle. 
Un error es incrementar o disminuir una variable de contador en la dirección incorrecta 
desde la condición de terminal. 
Otro es restablecer accidentalmente una variable de índice o contador dentro del código 
de bucle, en lugar de incrementarla o disminuirla.

La myFunc() función contiene un ciclo infinito porque la condición del terminal i != 4
nunca se evaluará false (y romperá el ciclo): 
ise incrementará en 2 en cada paso y saltará directamente sobre 4, 
ya que i es extraño comenzar. 
Corrija el operador de comparación en la condición terminal para que el ciclo solo se 
ejecute por i menos o igual a 4.

function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
