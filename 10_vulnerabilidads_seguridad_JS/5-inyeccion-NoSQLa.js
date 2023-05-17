/**
 * Se recibe publicacion del usuario /
 * buscar dentro bd de usuarios para encontrar usuarios cuyo nombre user coincida
 * con la solicitud
 */

/**
 * VULNERABILIDAD
 * Es vulnerable llamada inyección NoSQL, básciamente una inyección SQL, pero no se limita
 * solo a consultas SQL, para este caso el usuario podria ingresar a consultas que le
 * permitan acceder a cosas que no deberia
 */

// Get user info from username
app.post("/user", (req, res) => {
  /**
   * SOLUCIÓN
   * Validar si el tipo req.body.username
   */
  if (typeof req.body.username === "string") {
    return res.status(400).json({ message: "Invalid username" });
  }

  db.collection("user").find(
    {
      username: req.body.username,
    },
    (err, result) => {
      if (err || !result) {
        return res
          .status(500)
          .send({ message: "There was an error finding user" });
      } else {
        res.status(200).send(result);
      }
    }
  );
});
