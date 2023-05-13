/**
¡Un pequeño reto de JavaScript! ¿Cuál es la salida correcta de este código?

Piénsalo bien porque, aunque parece obvio, puede haber algún tipo de detalle que haga que no sea lo que piensas.

Saber cómo funcionan los métodos de Array en JavaScript es super importante para dominar las estructuras de datos en programación.
 
Elige tu respuesta:
¬ undefined
¬ ['banana', 'apple']
¬ 2
*/

function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);

console.log(result); // 2, push modifica array y devuelve la nueva length/logintud del array
