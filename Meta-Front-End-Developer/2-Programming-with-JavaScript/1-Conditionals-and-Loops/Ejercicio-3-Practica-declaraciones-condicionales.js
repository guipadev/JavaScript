/**
Complete los siguientes pasos para crear: ¿Eres lo suficientemente mayor?

1. Declare una edad variable usando la palabra clave var y configúrela en el número 10.

2. Agregue una instrucción if que verifique si el valor de la variable edad es mayor o igual al número 65. 
Dentro del bloque if , console.log la frase: "Obtienes tus ingresos de tu pensión".

3. Agregue un " si no ", donde verificará si el valor de la edad es menor a 65 y mayor o igual a 18. 
Dentro de este bloque " si no ", escribe "console.log" y luego "Cada mes recibes un salario".

4. Agregue otro " si no ", y esta vez verifique si el valor de la edad es menor de 18 años. 
Dentro del bloque " si no ", "escribe console.log" y luego "Obtienes una asignación".

5. Agregue una instrucción " else " para capturar cualquier otro valor. 
Dentro del bloque, escribe "console.log" y luego "El valor de la variable edad no es numérico".

Intente ajustar la edad y ejecutar el programa para ver cómo afectará la salida.
 */

var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age <= 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

/**
Codifique el programa de los días de la semana como una declaración de cambio

1. En la siguiente línea, defina una nueva variable, asígnele el nombre day y establezca su valor en "Sunday" .

2. Comience a codificar una declaración de cambio , pasando la variable del día como la expresión para evaluar.

3. Dentro del interruptor , agregue casos para cada día de la semana, comenzando con 'Lunes' y terminando con 'Domingo'. 
Asegúrese de usar valores de cadena para días. Dentro de cada caso, por ahora, simplemente agregue un archivo console.log('Hacer algo'), 
y agregue un descanso; en la línea de abajo.

4. En la parte inferior de la declaración de cambio, agregue el caso predeterminado y agregue un archivo console.log 
("No existe tal día").

5. Finalmente, actualice las llamadas de console.log para cada caso, según la actividad que tenga en cada uno de los días.
 */

/**
Consejos
- Si necesita asegurarse de que varias condiciones sean verdaderas en una declaración if, puede hacerlo usando el operador &&

- En JavaScript, la sintaxis correcta del operador "mayor o igual que" es: >= .

- No olvide agregar un descanso al final de cada caso en una declaración de cambio.
 */

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Read a book");
    break;
  case "Tuesday":
    console.log("Watch a movie");
    break;
  case "Wednesday":
    console.log("Read a book");
    break;
  case "Thursday":
    console.log("Play basketball");
    break;
  case "Friday":
    console.log("Socialize");
    break;
  case "Saturday":
    console.log("Chill");
    break;
  case "Sunday":
    console.log("Have barbecue");
    break;

  default:
    console.log("There is no such day");
    break;
}
