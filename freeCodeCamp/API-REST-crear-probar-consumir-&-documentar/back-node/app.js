/**
 * Esta sería la capa de aplicación de nuestro proyecto.
 * Aquí básicamente estamos configurando nuestro servidor y declarando que cualquier solicitud
 * que llegue a la /pets dirección debe usar las rutas (puntos finales) que hemos declarado en el
 * ./pets/routes/pets.routes.js directorio.
 */

import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSdoc from "swagger-jsdoc";

import petRoutes from "./pets/routes/pets.routes.js";

const app = express();
const port = 3000;

// swagger definition
/**
 * creando un swaggerSpec objeto que contiene opciones de configuración para nuestra
 * implementación y luego configuramos un middleware para representar nuestra
 * documentación en el /api-docs directorio de nuestra aplicación.
 */
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pets API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./pets/routes/*.js"],
};

/* Global middlewares */
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec))
);

/* Routes */
app.use("/pets", petRoutes);

/* Server setup */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  );
}

export default app;
