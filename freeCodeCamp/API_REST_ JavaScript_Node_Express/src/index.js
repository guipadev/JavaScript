const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

// Esta será la función que usaremos en nuestro archivo raíz, donde creamos el servidor Express
// para asegurarnos de que los documentos también se inicien.

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
