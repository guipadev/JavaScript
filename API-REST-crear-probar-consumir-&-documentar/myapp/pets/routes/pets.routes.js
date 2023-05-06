/**
 * En este archivo, estamos inicializando un enrutador
 * (lo que procesa nuestra solicitud y los dirige en consecuencia dada la URL del punto final)
 * y configurando cada uno de nuestros puntos finales.
 *
 * Vea que para cada punto final declaramos el método HTTP correspondiente ( get, put, etc.)
 * y la función correspondiente que activará ese punto final ( listPets, getPet, etc.).
 * Cada nombre de función es bastante explícito, por lo que podemos saber fácilmente qué hace
 * cada punto final sin necesidad de ver más código.
 *
 * Por último, también declaramos qué extremo recibirá parámetros de URL en las solicitudes como esta:
 * router.get("/:id", getPet);
 * Aquí estamos diciendo que recibiremos el id de la mascota como un parámetro de URL.
 */

import express from "express";
import {
  listPets,
  getPet,
  editPet,
  addPet,
  deletePet,
} from "../controllers/pets.controllers.js";

const router = express.Router();

router.get("/", listPets);

router.get("/:id", getPet);

router.put("/:id", editPet);

router.post("/", addPet);

router.delete("/:id", deletePet);

export default router;
