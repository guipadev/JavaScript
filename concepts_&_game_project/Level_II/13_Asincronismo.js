console.log('Hola')
console.log('Mis')
setTimeout(() => console.log('Prueba de asincronismo'), 4000) //Este aparecera de últmo
console.log('Queridos')
console.log('Programadores')

//EJEMPLO 2
//En el siguiente ejemplo, aunque el mensaje esta para que aparezca en 5 segundos, no lo hara hasta que se termine procesar el ciclo for

setTimeout(() => console.log("Hola soy la prueba, que entendiste el concepto"), 5000)
for (var i = 0; i < 10000000000; i++) {

}