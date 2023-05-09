/*
Puede obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estos se denominan clásicamente getters y setters .

Las funciones getter están destinadas simplemente a devolver (obtener) el valor de la variable 
privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones de setter están destinadas a modificar (establecer) el valor de la variable 
privada de un objeto en función del valor pasado a la función de establecimiento. 
Este cambio podría implicar cálculos, o incluso sobrescribir el valor anterior por completo.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const novel = new Book('anonymous');
console.log(novel.writer);

novel.writer = 'newAuthor';
console.log(novel.writer);

La consola mostraría las cadenas anonymous y newAuthor.

Observe la sintaxis utilizada para invocar getter y setter. 
Ni siquiera parecen funciones. 
Los getters y setters son importantes porque ocultan detalles de implementación internos.

Nota: 
Es una convención preceder el nombre de una variable privada con un guión bajo ( _). 
Sin embargo, la práctica en sí no hace que una variable sea privada.

Utilice la class palabra clave para crear una Thermostat clase. 
El constructor acepta una temperatura Fahrenheit.

En la clase, cree un getter para obtener la temperatura en Celsius y un setter para establecer 
la temperatura en Celsius.

Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32, donde F es el valor de la 
temperatura en Fahrenheit, y Ces el valor de la misma temperatura en Celsius.

Nota: 
Cuando implemente esto, hará un seguimiento de la temperatura dentro de la clase en una escala, 
ya sea Fahrenheit o Celsius.

Este es el poder de un getter y un setter. 
Estás creando una API para otro usuario, que puede obtener el resultado correcto 
independientemente de cuál rastrees.

En otras palabras, está abstrayendo los detalles de implementación del usuario.

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius

thermos.temperature = 26;

temp = thermos.temperature; // 26 in Celsius
*/

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius

thermos.temperature = 26;

temp = thermos.temperature; // 26 in Celsius
