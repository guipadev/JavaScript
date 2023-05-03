const ps = {
  id: 78564,
  name: "PlayStation",
};

// En vez de realizar este proceso, de chequear uno por uno
if (ps.model && ps.model.storage) {
  console.log("🌀");
}

/** Mejor comprobar con operador de encadenamiento
 * Chequear propiedad o metodo del objeto existe, Si no es null o undefined, y sino lo es continua
 * pero si lo es, no arrojas un error, si no que devuelve completamnete undefined toda la operación
 */

ps.model?.storage && console.log("🌀");

/**
 * Comprando la existencia de un metodo
 */

ps.model?.calculate?.();
