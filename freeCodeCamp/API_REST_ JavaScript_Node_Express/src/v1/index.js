/**
 * Almacenamiento en caché.
 * Si bien parece resolver muchos problemas, también puede traer algunos problemas.
 *
 * Algunas cosas que debe tener en cuenta al usar un caché:
 * siempre asegurarse de que los datos dentro del caché estén actualizados porque no
 * desea entregar datos obsoletos
 * mientras se procesa la primera solicitud y el caché está a punto de llenarse y
 * llegan más solicitudes, debe decidir si retrasa esas otras solicitudes
 * y sirve los datos del caché o si también reciben datos directamente de la base de datos
 * como la primera solicitud es otro componente dentro de su infraestructura
 * si elige un caché distribuido como Redis (por lo que debe preguntarse si realmente tiene sentido usarlo)
 */
const express = require("express");
const bodyParser = require("body-parser");

const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();

const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

/*
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;
*/
