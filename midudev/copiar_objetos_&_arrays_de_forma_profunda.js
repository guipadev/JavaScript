/**
Al usar el spread operator o el Object.assign, se crean copias superficiales. 
Eso significa que si dentro de un objeto o array tienes anidados otros objetos o arrays, 
estos no serán copiados si no que serán referenciados.

Eso significa que en la copia superficial, si cambias una propiedad de un objeto referenciado, 
se cambiará también en el original.

Para arreglaro, hay que hacer copias profundas.

🆕 En JavaScript, llega el método structuredClone, lo podemos hacer fácil y rápido.

✅ Tiene un gran soporte y, si no, puedes usar un polyfill para asegurarte que 
funciona en todos los navegadores que soportas.

👋 Históricamente se han usado bibliotecas o el hack de JSON.stringify para ello, 
pero ya no será necesario.
 */

const obj = { a: { b: true } };

const deepCopy = structuredClone(obj);

console.log(deepCopy); // { a: { b: true } }
