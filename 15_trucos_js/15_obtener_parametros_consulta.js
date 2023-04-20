/*
15. Obtener parámetros de consulta
window.locationEl objeto tiene un montón de métodos y propiedades de utilidad. 
Podemos obtener información sobre el protocolo, host, puerto, dominio, etc. 
de las URL del navegador utilizando estas propiedades y métodos.

Una de las propiedades que encontré muy útil es,
*/
window.location.search

/* 
La search propiedad devuelve la cadena de consulta de la URL de ubicación. 
Aquí hay una URL de ejemplo: https://tapasadhiary.com?project=js. 
la location.searchvoluntad de volver,?project=js

Podemos usar otra interfaz útil llamada, URLSearchParamsjunto con 
location.searchpara obtener el valor de los parámetros de consulta.
*/

let project = new URLSearchParams(location.search).get('project');

// Lea más sobre este tema desde aquí 
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams