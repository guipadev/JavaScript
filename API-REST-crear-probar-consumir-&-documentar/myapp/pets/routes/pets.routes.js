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

/**
 * Agregamos un tipo especial de comentario para cada uno de nuestros puntos finales.
 * Esta es la forma en que la interfaz de usuario de Swagger identifica la documentación
 * dentro de nuestro código.
 * Los hemos puesto en este archivo porque tiene sentido tener los documentos lo más cerca
 * posible de los puntos finales, pero se puede colocarlos donde quiera.
 *
 * Al analizar los comentarios en detalle, puede ver que están escritos en una sintaxis similar a YAML,
 * y para cada uno de ellos especificamos la ruta del punto final, el método HTTP, una descripción,
 * los parámetros que recibe y las posibles respuestas.
 *
 * Todos los comentarios son más o menos iguales excepto el primero.
 * En ese estamos definiendo un "esquema" que es como escribir un tipo de objeto que luego podemos
 * reutilizar en otros comentarios.
 * En nuestro caso, estamos definiendo el esquema "Mascota" que luego usamos para los puntos finales
 * put y post.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *     Pet:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Pet id
 *          name:
 *              type: string
 *              description: Pet name
 *          age:
 *              type: integer
 *              description: Pet age
 *          type:
 *              type: string
 *              description: Pet type
 *          breed:
 *              type: string
 *              description: Pet breed
 *     example:
 *          id: 1
 *          name: Rexaurus
 *          age: 3
 *          breed: labrador
 *          type: dog
 */

/**
 * @swagger
 * /pets:
 *  get:
 *     summary: Get all pets
 *     description: Get all pets
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/", listPets);

/**
 * @swagger
 * /pets/{id}:
 *  get:
 *     summary: Get pet detail
 *     description: Get pet detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pet id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/:id", getPet);

/**
 * @swagger
 * /pets/{id}:
 *  put:
 *     summary: Edit pet
 *     description: Edit pet
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pet id
 *     requestBody:
 *       description: A JSON object containing pet information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Pet'
 *           example:
 *              name: Rexaurus
 *              age: 12
 *              breed: labrador
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.put("/:id", editPet);

/**
 * @swagger
 * /pets:
 *  post:
 *      summary: Add pet
 *      description: Add pet
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Pet'
 *                 example:
 *                    name: Rexaurus
 *                    age: 12
 *                    breed: labrador
 *                    type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.post("/", addPet);

/**
 * @swagger
 * /pets/{id}:
 *  delete:
 *     summary: Delete pet
 *     description: Delete pet
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pet id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
router.delete("/:id", deletePet);

export default router;
