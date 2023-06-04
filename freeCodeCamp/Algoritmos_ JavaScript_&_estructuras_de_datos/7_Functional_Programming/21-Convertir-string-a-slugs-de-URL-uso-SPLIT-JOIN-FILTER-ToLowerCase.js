/*
Aplicar programación funcional para convertir cadenas a slugs de URL

Los últimos desafíos abarcaban una serie de métodos útiles para arreglos y cadenas, 
que siguen los principios de la programación funcional. 

También hemos aprendido acerca de reduce, que es un poderoso método utilizado para reducir 
los problemas a formas más simples. 

Desde el cálculo de promedios a la ordenación, cualquier operación con arreglos puede lograrse si lo aplicamos. 
Recuerda que map y filter son casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de gestión de contenidos (CMS) tienen los títulos de una publicación añadidos como parte de la URL
con el simple propósito de ser marcadores. 

Por ejemplo, si escribes una publicación titulada Stop Using Reduce, es probable que la url tenga parte de este
titulo en ella (.../stop-using-reduce). 

Puede que ya hayas notado esto en el sitio de freeCodeCamp.
------------------------------------------------------------------------------------------
Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. 
Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. 

Aquí están los requisitos:
- La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas
- El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)
- El resultado debe contener todas las letras minúsculas
- El resultado no debe tener espacios

function urlSlug(title) {

}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
*/

const globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

var winterComing = urlSlug(globalTitle);
console.log(winterComing); //winter-is-coming

//Solution 2

var globalTitle2 = "Winter Is Coming";

function urlSlug2(title) {
  return title
    .split(" ")
    .filter((substr) => substr !== "")
    .join("-")
    .toLowerCase();
}

var winterComing = urlSlug2(globalTitle2); // Should be "winter-is-coming"
