/***********************************************
Ejercicio 45
Agrega un nuevo m�todo llamado palindrome al prototipo de String que retorne true si el string 
es un pal�ndrome, false de lo contrario.

Recuerda que un pal�ndrome es una frase que se lee igual de izquierda a derecha que de derecha a izquierda 
(excluyendo los espacios en blanco):

// c�digo de prueba
console.log("anita lava la tina".palindrome()) // true
console.log("aman a panama".palindrome()) // true
console.log("hola mundo".palindrome()) // false
******************************************************/

String.prototype.palindrome = function() {
    var re = /[\W_]/g;
    var lowRegStr = this.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr; 
  }
  
    
  console.log("anita lava la tina".palindrome()) // true
  console.log("aman a panama".palindrome()) // true
  console.log("hola mundo".palindrome()) // false
  console.log("a b a".palindrome())