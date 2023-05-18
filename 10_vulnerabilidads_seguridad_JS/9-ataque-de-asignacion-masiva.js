/**
 * Se esta buscando en una BD un usuario que coincida con el username
 *
 * VULNERABILIDAD
 * Ataque de asignación masiva, osea que la entrada del usuario puede ser capaz
 * de establecer propiedades de un objeto, sucede porque estamos buscando por req.body
 * si no encontramos insertamos todo el objeto body y este podria tener otros datos como
 * rol, email, password etc
 *
 */

import { encryptPassword } from "./util/password";

cleapp.post("/", function (req, res) {
  db.user.find(
    {
      username: req.body.username,
    },
    async (err, result) => {
      if (err) {
        return res.status(500).json({ msg: "Error" });
      } else if (result.length === 0) {
        // Insert user
        // await db.user.insert(req.body);

        /**
         * SOLUCIÓN
         * Crear un nuevo objeto que solo establezca las cosas que sabemos que son seguras
         * y tambien guardamos password utilizar una libreria para encriptar
         */

        await db.user.insert({
          username: String(req.body.username),
          email: String(req.body.email),
          password: encryptPassword(req.body.password),
        });

        return res.status(200);
      } else {
        return res.status(409);
      }
    }
  );
});
