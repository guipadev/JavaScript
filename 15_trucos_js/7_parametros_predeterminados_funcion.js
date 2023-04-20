/*
7. Parámetros predeterminados de la función
En JavaScript, los argumentos de función (o parámetros) son como variables locales
para esa función. 
Puede o no pasar valores para aquellos mientras invoca la función. 
Si no pasa un valor para un parámetro, será undefinedy puede causar algunos 
efectos secundarios no deseados.

Hay una forma sencilla de pasar un valor predeterminado a los parámetros de 
la función mientras los define. 
Aquí hay un ejemplo en el que estamos pasando el valor predeterminado Hello
al parámetro message de la greetings función.
*/

let greetings = (name, message='Hello,') => {
    return `${message} ${name}`;
}

console.log(greetings('Jack'));
console.log(greetings('Jack', 'Hola!'));
