const SOMEOBJECT = {}; // Currently empty

/**
 * PROBLEMA
 * En el encabezado esta la clave del token
 * La vulnerabilidad es la contaminación del prototipo en JS
 * Si se logra pasar la cadena guíon bajo (SOMEOBJECT["__proto__"] && "__proto__")
 * dando true y permitiendo pasar
 */

/**
 * SOLUCIÓN
 * Asegurarnos que en lugar de indexar con este token
 * Debemos asegurarnos de observar las propiedades del objeto en cuestion
 * y lo podemos realizar con la función de propiedad hasOwnProperty
 *
 */

app.get("/validationToken", (req, res) => {
  if (req.header("token")) {
    const token = Buffer.from(req.header("token"), "base64");
    // should always be false
    /*
    if (SOMEOBJECT[token] && token) {
      return res.send("true");
    }
    */
    if (SOMEOBJECT.hasOwnProperty(token) && token) {
      return res.send("true");
    }
  }
  return res.send("false");
});
