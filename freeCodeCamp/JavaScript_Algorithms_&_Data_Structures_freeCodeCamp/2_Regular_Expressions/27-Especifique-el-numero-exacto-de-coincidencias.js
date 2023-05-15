/*
Especifique el número exacto de coincidencias

Puede especificar el número inferior y superior de patrones con especificadores 
de cantidad usando corchetes. 
A veces solo quieres un número específico de coincidencias.

Para especificar una cierta cantidad de patrones, solo tenga ese número entre llaves.

Por ejemplo, para hacer coincidir solo la palabra hah con la letra a 3 veces, 
su expresión regular sería /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;

multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

En orden, las tres test llamadas devolverían false, true y false.

Cambie la expresión regular timRegex para que coincida con la palabra Timber
solo cuando tenga cuatro letras m.

let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
