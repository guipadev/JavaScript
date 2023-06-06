// Normalmente creamos los errores así
/*
const validateUser = ({ name, age, email } = {}) => {
  if (!name) throw new Error("name is required");
  if (!age) throw new Error("age is required");
  if (!email) throw new Error("email is required");

  // Llamar al aBD para guardar el usuario
  throw new ConnectionError('database is not available')
};

// Nos indica el error, pero no de que 
/*
try {
  validateUser();
} catch (err) {
  console.error(err instanceof Error); // true
}
*/

// Llamar a la base de datos para guardar el usuario
try {
  mongodb.connect();
} catch (e) {
  // enviar traza original a un servicio NUESTRO o lo que sea, nunca al usuario
  // sendBeaconError(e)
  throw new ConnectionError("database is not available");
}

// Una forma adecuada del uso de los errores
const validateUser = ({ name, age, email } = {}) => {
  if (!name) throw new ValidationError("name is required");
  if (!age) throw new ValidationError("age is required");
  if (!email) throw new ValidationError("email is required");

  // Llamar a la BD para guardar el usuario
  throw new ConnectionError("database is not available");
};

// Podemos crear nuestros propios errores en JS
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class ConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConnectionError";
  }
}

const name = "midu";
const age = 27;
const email = "midu@gmail.com";

// Uso en codigo async
try {
  validateUser({ name, age, email });
} catch (e) {
  console.log(e.name);
  if (e.name === "ConnectionError") {
    // retry after a few seconds
    setTimeout(() => {
      validateUser({ name, age, email });
    });
  }

  if (e.name === "ValidationError") {
    // showUIModalValidation()
  }
}

validateUser();
