// ❌ Forma incorrecta
function process(items) {
  return items.length > 5 ? true : false;
}

// ✔️ Forma correcta
function process(items) {
  return items.length > 5;
}

// ❌ Forma incorrecta
function process(items) {
  return items.length > 5 ? otraFuncion() : null;
}

// ✔️ Forma correcta
function process(items) {
  items.length > 5 && otraFuncion();
}

function otraFuncion() {
  // code
}
