/**
 * Esta sería la capa de aplicación de nuestro proyecto.
 * Aquí básicamente estamos configurando nuestro servidor y declarando que cualquier solicitud
 * que llegue a la /pets dirección debe usar las rutas (puntos finales) que hemos declarado en el
 * ./pets/routes/pets.routes.js directorio.
 */

//import express from "express";
import cors from "cors";
import petRoutes from "../pets/routes/pets.routes";

const express = require("express");

const app = express();
const port = 3000;

/* Global middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/pets", petRoutes);

/* Server setup */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  );
}

export default app;
