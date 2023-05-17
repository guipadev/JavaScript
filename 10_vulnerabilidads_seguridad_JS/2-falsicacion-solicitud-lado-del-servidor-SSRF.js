/**
 * VULNERABILIDAD
 * Una vulnerabilidad llamada falsicación de solicitud del lado del servidor (SSRF)
 * Un atacante intenta engañar a un servidor para que haga el trabajo sucio por ellos
 * mediante el uso de permisos que el atacante normalmente no tendria, el servidor ejecuta
 * algún tipo de consulta que el atacante normalmente no podria
 *
 */

// return stored JSON data for a given JSON URL
app.get("/api/data", async (req, res) => {
  // https://example.com/api/data?url=internal.myapp.com/data/countries.json
  // https://example.com/api/data?url=internal.myapp.com/data/states.json

  // https://example.com/api/data?url=internal.myapp.com/data/confidential.json

  /**
   * SOLUCIÓN
   * Crear constantes de URL permitidas
   */
  const allowedURLs = [
    "https://example.com/api/data?url=internal.myapp.com/data/countries.json",
    "https://example.com/api/data?url=internal.myapp.com/data/states.json",
  ];

  const url = req.query.url;

  try {
    /**
     * Permitir visitar las URL los datos públicos que tenemos permitidos
     * Evitando que el servidor pueda revelar datos confidenciales
     */
    if (!allowedURLs.includes(url)) {
      return res.status(400).json({ error: "Bad URL" });
    }

    const response = await fetch(url);

    const data = await response.json();

    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.msg });
  }
});
