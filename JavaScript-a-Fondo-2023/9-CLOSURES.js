/**
 * CLOSURES
 *
 * Retornar una función desde otra función, con acceso al entorno de variables de un ámbito exterior
 *
 * Entenderlo como funcionan los closures es imprescindible para enteder JS
 */

function soyUnClosure() {
  const variableLocal = "Jose";

  return function () {
    return variableLocal.toLowerCase();
  };
}

const closure = soyUnClosure();

console.log(closure()); // jose

/**
 * Uno de los usos más comunes es la creación de factorías de funciones:
 * exponen parte de su ámbito para crear otras funciones
 */

function pedirPizzaUID(UID) {
  const ID = `${UID}-${Math.random()}`;

  return function (pizza) {
    return `${ID}_${pizza}`;
  };
}

// En vez de:
function pedirPizzaUID(UID, pizza) {
  const pedido = `${UID}_${pizza}`;
  return pedido;
}

console.log(pedirPizzaUID(312452, "carbonara"));
console.log(pedirPizzaUID(548452, "vegetal"));

// Ejemplo de uso closure:
function pedirHamburguesa(UID) {
  const pedido = `PEDIDO_${UID}`;

  return function (pizza) {
    return `${pedido}_${pizza}`;
  };
}

const pedidoUID = pedirHamburguesa(852794136);

console.log("------- Pedido -------");

console.log(pedidoUID("Hawaiana")); // PEDIDO_852794136_Hawaiana
console.log(pedidoUID("Peperoni")); // PEDIDO_852794136_Peperoni
console.log(pedidoUID("Vegetal")); // PEDIDO_852794136_Vegetal

/**
 * Cada closure retornado es independiente al anterior, es decir, forman un nuevo ámbito
 *
 * Eso sí, un closure puede modificar el estado atrapado en su interior
 */

function pedirArepaUID(UID) {
  let cantidadArepa = 0;

  const ID = `${UID}-${Math.random()}`;

  return function (arepa) {
    cantidadArepa++;
    return `${ID}_${arepa}_${cantidadArepa}`;
  };
}

// Ejemplo de uso
function pedirHelado(UID) {
  let cantidadHelados = 0;

  const pedido = `PEDIDO_${UID}`;

  return function (helado) {
    cantidadHelados++;
    return `${pedido}__${helado}__${cantidadHelados}`;
  };
}

const solicitudUID = pedirHelado(8455855);

console.log(solicitudUID("Ron con pasas")); // PEDIDO_8455855__Ron con pasas__1
console.log(solicitudUID("Frutos rojos")); // PEDIDO_8455855__Frutos rojos__2
console.log(solicitudUID("Macadamia")); // PEDIDO_8455855__Macadamia__3
