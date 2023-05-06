/**
Tareas para completar

1. Cree un nuevo literal de matriz vacío y asígnelo a la ropa variable.

2. Agrega 5 de tus prendas favoritas como cadenas usando el método push() .

3. Retire la quinta prenda de la matriz usando el método pop() .

4. Agrega una nueva prenda usando el método push() .

5. Use console.log para mostrar el tercer elemento de la matriz de ropa en la consola.

6. Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar .

7. Usando la notación de puntos, asigne una propiedad de color al objeto favCar 
y asígnele un valor de cadena con el color de su elección.

8. Usando la notación de puntos, asigne una propiedad convertible al objeto favCar 
y asígnele un valor booleano de su elección.

9. Utilice la consola para registrar todo el objeto favCar.

Consejos
Recuerde usar la sintaxis literal del objeto: {} .

Recuerde usar la sintaxis literal de matriz: [] .
 */

var clothes = [];

clothes.push("camisa");
clothes.push("camibuso");
clothes.push("camiseta");
clothes.push("pantaloneta");
clothes.push("jeans");

clothes.pop(4);

clothes.push("chaqueta");

console.log(clothes[2]);

let favCar = {};

favCar.color = "green";

favCar.convertible = true;

console.log(favCar);
