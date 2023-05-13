const map = new Map();

// Forma ingresar clave valor, cualquier tipo de dato
map.set(1, "Lunes");
map.set("2", 3);
map.set(false, 10);

// Comprobar si existe un elemento basado en clave - valor
console.log(map.has(1)); // true

// Conocer el número de elementos que tenemos en nuestro mapa
console.log(map.size); // 3

// Eliminar una entrada basada de nuevo en la clave
map.delete(false);

// Agregar un elemento con una clave que ya existe
// Su valor se va a sobreescribir
map.set("2", 10);

console.log(map.size);
