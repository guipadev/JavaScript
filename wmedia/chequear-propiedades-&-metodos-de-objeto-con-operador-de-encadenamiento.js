const ps = {
  id: 78564,
  name: "PlayStation",
};

// En vez de realizar este proceso, de chequear uno por uno
if (ps.model && ps.model.storage) {
  console.log("🌀");
}

// Mejor comprobar con operador de encadenamiento
// Si es nulo = undefined y sino undefined toda la operación
ps.model?.storage && console.log("🌀");
