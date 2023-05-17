const jwt = require("jsonwebtoken");

/**
 * VULNERABILIDAD
 * Las credenciales codificadas se encuentra en codigo fuente
 */

// Secret key for signing JWT
// const secret = "my-super-duper-secret-key";

/**
 * SOLUCION
 * Las credenciales codificadas deben obtenerse de variables de entorno
 */
// Secret key for signing JWT
const secret = process.env.JWT_TOKEN;

app.post("/login", (req, res) => {
  // Assume authentication happens successfully
  // & the following user is returned form the DB
  const user = { id: 123, name: "John Doe" };

  // Sing JWT with user ID and secret key
  const token = jwt.sign(user, secret);

  // Send JWT back to client
  res.json({ token });
});
