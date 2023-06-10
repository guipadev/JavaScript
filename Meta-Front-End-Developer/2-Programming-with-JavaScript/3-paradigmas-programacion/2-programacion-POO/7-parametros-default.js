/*
Parámetros predeterminados
Una característica útil de ES6 me permite establecer un parámetro predeterminado dentro de una definición de función Primero, .

Lo que eso significa es que usaré una característica de ES6 que me permite establecer un parámetro predeterminado dentro 
de una definición de función, que va de la mano con el enfoque de codificación defensiva, mientras que casi no requiere 
esfuerzo para implementar.

Por ejemplo, considere una declaración de función sin parámetros predeterminados establecidos:
*/

function noDefaultParams(number) {
  console.log("Result:", number * number);
}

/*
Obviamente, la  función noDefaultParams  debería devolver cualquier número que reciba,  al cuadrado .

Sin embargo, ¿qué pasa si lo llamo así:
*/
noDefaultParams(); // Result: NaN

/*
JavaScript, debido a su naturaleza dinámica, no arroja un error, pero devuelve una salida sin sentido.

Considere ahora, la siguiente mejora, utilizando parámetros predeterminados:
*/
function withDefaultParams(number = 10) {
  console.log("Result:", number * number);
}

/*
Los parámetros predeterminados me permiten crear una función que se ejecutará con valores de argumento predeterminados
incluso si no le paso ningún argumento, sin dejar de ser lo suficientemente flexible como para permitirme pasar valores 
de argumento personalizados y tratarlos en consecuencia.

Esto ahora me permite codificar mis clases de una manera que promoverá una creación de instancias de objetos más fácil.

Considere la siguiente definición de clase:
*/
class NoDefaultParams {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}

/*
Ahora crearé una instancia de un objeto de la  clase NoDefaultParams  y ejecutaré el  método de cálculo ()  en él. 
Obviamente, el  bool1  debe configurarse en  verdadero  en la invocación para que esto funcione, pero lo configuraré en falso
 a propósito, para resaltar el punto que estoy señalando.
*/
var fail = new NoDefaultParams(1, 2, 3, false);
fail.calculate(); // 'The value of bool1 is incorrect'

/*
Este ejemplo podría resaltar la razón por la que a veces aparecen mensajes de error extraños cuando se usa algún software; 
tal vez los desarrolladores simplemente no tuvieron suficiente tiempo para construirlo mejor.

Sin embargo, ahora que conoce los parámetros predeterminados, este ejemplo se puede mejorar de la siguiente manera:
*/
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

/*
Este enfoque mejora la experiencia del desarrollador de mi código, porque ya no tengo que preocuparme por alimentar la 
clase WithDefaultParameters  con todos los argumentos. 
Para pruebas rápidas, esto es excelente, porque ya no necesito preocuparme por pasar los argumentos adecuados.

Además, este enfoque realmente brilla cuando se construyen jerarquías de herencia usando clases, ya que hace posible 
proporcionar solo las propiedades personalizadas en la subclase, al mismo tiempo que acepta todos los parámetros 
predeterminados del constructor de la superclase.

En conclusión, en esta lectura he cubierto lo siguiente:

Cómo abordar el diseño de un programa orientado a objetos en JavaScript

El papel de las   palabras clave extendidas  y  súper

La importancia de utilizar parámetros por defecto.
*/
