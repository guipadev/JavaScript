 //EXPORTANDO TODOS LOS MODULOS DEL ARCHIVO
 export default function myFunc() {}

 //IMPORTANDO TODOS LOS MODULOS DEL ARCHIVO
 import myFunc from './file'

 myFunc();

 //AHORA SE REALIZA DE ESTA MANERA

 //EN UN ARCHIVO EXPORTANDO
 export function myFunc() {}
 export function myFunc2() {}
 export function myFunc3() {}
 export function myFunc4() {}

 //EN UN ARCHIVO IMPORTANDO
 //Destructuramos el archivo y llamamos solo las funciones que necesitamos
 import { myFunc, myFunc2, myFunc3, myFunc4 } from './file'

 myFunc();
 myFunc2();
 myFunc3();