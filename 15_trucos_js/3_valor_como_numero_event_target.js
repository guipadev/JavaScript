/**
 * 3. Valor como número
 * ¿Alguna vez ha notado que event.target.value siempre devuelve un valor de tipo
 * cadena incluso cuando el cuadro de entrada es de tipo número?
 *
 * Sí, vea el ejemplo a continuación. Tenemos un cuadro de texto simple de tipo
 * número. Significa que solo acepta números como entrada.
 * Tiene un controlador de eventos para manejar los eventos de activación.
 */

<input type="number" onkeyup="trackChange(event)" />;

/**
 * En el método del controlador de eventos, sacamos el valor usando event.target.value.
 * Pero devuelve un valor de tipo cadena.
 * Ahora tendré un dolor de cabeza adicional para analizarlo en un número entero.
 * ¿Qué sucede si el cuadro de entrada acepta números flotantes (como 16,56)?
 * parseFloat () entonces? ¡Ah, todo tipo de confusión y trabajo extra!
 */

function trackChange(event) {
  let value = event.target.value;
  console.log(`is ${value} a number?`, Number.isInteger(value));
}

/**
 * Utilice event.target.valueAsNumber en su lugar.
 * Devuelve el valor como número.
 */

let valueAsNumber = event.target.valueAsNumber;
console.log(`is ${value} a number?`, Number.isInteger(valueAsNumber));
