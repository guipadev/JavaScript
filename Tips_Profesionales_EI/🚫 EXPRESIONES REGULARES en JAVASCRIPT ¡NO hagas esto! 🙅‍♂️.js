const mensaje = 'Hoola, soy @yao'
const pattern = /yao/g

pattern.test(mensaje)   // true

pattern.test(mensaje)   // false

 // Es falso porque cada vez que se ejecuta test se esta mutando el lastIndex que sirve como puntero
 // Solución quitar la bandera g
 //colocar en el medio pattern.lastIndex=0

//Solucion mas optima
// mensaje.match(pattern) !== null
