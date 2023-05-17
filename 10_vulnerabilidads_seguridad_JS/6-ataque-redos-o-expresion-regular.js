/**
 * VULNERABILIDAD
 * Ataque de redos o expresión regular de denegación de servicio
 * La expresión regular es complicada, por lo que lleva mucho tiempo validar y probar
 * como la entrada esta bajo el control del usuario y no bajo nuestro control
 * un atacante malintencionado puede conducir a la denegación de servicios
 */

/**
 * SOLUCION
 * Usar una libreria para realizar este tipo de validaciones  en vez de utilizar nuestras
 * propias expresiones regulares y asi aseguramos de hacerlo de forma eficiente
 */
const validator = require("validator");

// Assume the RegEx validates correctly
const emailRegex =
  /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}[a-z]{2,3}))$/;

app.post("/validateEmail", (req, res) => {
  const email = req.body.email;

  /*
  if (!email || !emailRegex.test(email)) {
    return res.status(400).send({ error: "Invalid email" });
  }
  */

  if (!email || !validator.isEmail(email)) {
    return res.status(400).send({ error: "Invalid email" });
  }

  return req.status(200).send({ valid: true });
});
