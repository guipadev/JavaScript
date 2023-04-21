var numero = 23
console.log(numero)

console.log(numero + 7)

var aumentaDinero = 10,
    disminuye = 6,
    dinero = 100

console.log(dinero - disminuye)
console.log(dinero + disminuye)
console.log(dinero)
console.log(dinero += aumentaDinero)

//COMO TRATA LOS NUMEROS

var numero_decimial = 89.43

var resultado = numero_decimial * 6 //536.4

console.log(resultado)

//CONVERTIR A NUMERO ENTERO
var resultadoFull = numero_decimial * 100 * 6 / 100

console.log(resultadoFull)

//OTRO EJEMPLO
var numero2 = 536.4 * 3

console.log(numero2)

var numero2 = 536.4

var resultado2 = numero2 * 100 * 3 / 100

console.log(resultado2)

//METODO MATH
//Math.round()  Aproxima la cifra dependiendo si el decimal es => 0.5 redondea a entero, pero sin < 0 mantiene el entero

var numeroPrueba = 28.63

console.log(Math.round(numeroPrueba))

//EJEMPLO NUMERO EXTENSO, UTILIZAR toFixed
//Determinar cuantos decimales mostrar despues del punto, pero lo vuelve a string
var numeroExtenso = 123.45678 * 3 //370.37034
console.log(numeroExtenso)

var nuevoNumero = numeroExtenso.toFixed(4) //pero lo vuelve a string
console.log(nuevoNumero)

typeof(nuevoNumero) //string

//CONVERTIR A NUMERO
var numeroConvertido = parseFloat(nuevoNumero)
console.log(numeroConvertido)

typeof(numeroConvertido) //number


//CONVERTIR STRING A NUMERO 
//CASTEO CAMBIAR TIPO DE DATO POR OTRO TIPO
var palabra = "128.63"
console.log(parseInt(palabra)) //128 parte entera

var palabra = "12863sfasf35**"
console.log(parseInt(palabra)) //12863

var palabras = "Hola128"
console.log(parseInt(palabras)) //NaN

//EL CAMBIO CON EL NUMBER ES ESTRICTO
var num = "1362.323sdgsa"
console.log(Number(num)) //NaN

var num2 = "1362.323"
console.log(Number(num2)) //1362.323

//OPERADOR UNITARIO +
//Lo que hace es convertir tipos de datos a numero de forma rapida y efectivo funciona en true, false, null

"56" +
"56" //56

"123.63" +
"123.63" //123.63

true
    +
    true //1

false
    +
    false //0

//EJERCICIO
//Captura un numero y determinar cual es su parte entera y cual es su parte decimal

var numerillo = "1545.6543"
console.log(parseInt(numerillo)) //1545 parte entera
console.log(Number(numerillo)) //1545.6543 parte decimal