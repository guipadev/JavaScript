/**
 * 5. Es posible que necesite la clasificación que no distingue
 * entre mayúsculas y minúsculas
 *
 * Es posible que tenga que lidiar con elementos de matriz de diferentes casos
 * (capitales y pequeños). La función predeterminada sort() puede no ayudar.
 * Aquí hay una matriz con elementos de casos mixtos.
 */

let names = ["Bob", "bakshi", "adam", "Maya", "carl"];
names.sort();
console.log(names);

/**
 * El resultado anterior es realmente correcto ya que la comparación ocurre
 * en el UTF-16 code orden de las unidades.
 * Sin embargo, puede quererlo en el siguiente orden:
 */

// "adam", "bakshi", "Bob", "carl", "Maya"

/**
 * Utilice la función de comparación y compare los elementos con toUpperCase()
 * para hacer una comparación que no distinga entre mayúsculas y minúsculas.
 */

names.sort(function (a, b) {
  let left = a.toUpperCase();
  let right = b.toUpperCase();

  return left === right ? 0 : left > right ? 1 : -1;
});
console.log(names);
