/**
 * Para cada punto final, las pruebas envían solicitudes HTTP y verifican las respuestas
 * en busca de tres cosas:
 * el código de estado HTTP, el tipo de respuesta (que debe ser JSON) y el cuerpo de la respuesta
 * (que debe coincidir con el formato JSON esperado).
 *
 * Cada prueba verifica si se devuelven el código de estado HTTP esperado, el tipo de respuesta
 * y el cuerpo de la respuesta.
 * Si alguna de estas expectativas no se cumple, la prueba falla y muestra un mensaje de error.
 *
 * Estas pruebas son importantes para garantizar que la API funcione de manera correcta
 * y consistente en diferentes puntos finales y solicitudes HTTP.
 * Las pruebas se pueden ejecutar automáticamente, lo que facilita la detección de cualquier
 * problema o regresión en la funcionalidad de la API.
 */

import supertest from "supertest"; // Import supertest
import server from "../../app"; // Import the server object

const requestWithSupertest = supertest(server); // We will use this function to mock HTTP requests

/**
 * La primera prueba envía una solicitud GET al extremo /mascotas y espera que la API
 * devuelva una matriz de mascotas en formato JSON.
 */
describe('GET "/"', () => {
  test('GET "/" returns all pets', async () => {
    const res = await requestWithSupertest.get("/pets");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Rex",
        type: "dog",
        age: 3,
        breed: "labrador",
      },
      {
        id: 2,
        name: "Fido",
        type: "dog",
        age: 1,
        breed: "poodle",
      },
      {
        id: 3,
        name: "Mittens",
        type: "cat",
        age: 2,
        breed: "tabby",
      },
    ]);
  });
});

/**
 * La segunda prueba envía una solicitud GET al extremo /pets/:id
 * y espera que la API devuelva la mascota con el ID especificado en formato JSON.
 */
describe('GET "/:id"', () => {
  test('GET "/:id" returns given pet', async () => {
    const res = await requestWithSupertest.get("/pets/1");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      name: "Rex",
      type: "dog",
      age: 3,
      breed: "labrador",
    });
  });
});

/**
 * La tercera prueba envía una solicitud PUT al extremo /pets/:id
 * y espera que la API actualice la mascota con el ID especificado
 * y devuelva la mascota actualizada en formato JSON.
 */
describe('PUT "/:id"', () => {
  test('PUT "/:id" updates pet and returns it', async () => {
    const res = await requestWithSupertest.put("/pets/1").send({
      id: 1,
      name: "Rexo",
      type: "dogo",
      age: 4,
      breed: "doberman",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      name: "Rexo",
      type: "dogo",
      age: 4,
      breed: "doberman",
    });
  });
});

/**
 * La cuarta prueba envía una solicitud POST al extremo /mascotas
 * y espera que la API agregue una nueva mascota y la devuelva en formato JSON.
 */
describe('POST "/"', () => {
  test('POST "/" adds new pet and returns the added item', async () => {
    const res = await requestWithSupertest.post("/pets").send({
      name: "Salame",
      type: "cat",
      age: 6,
      breed: "pinky",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 4,
      name: "Salame",
      type: "cat",
      age: 6,
      breed: "pinky",
    });
  });
});

/**
 * La quinta prueba envía una solicitud DELETE al extremo /pets/:id
 * y espera que la API elimine la mascota con la ID especificada
 * y devuelva la lista actualizada de mascotas en formato JSON.
 */
describe('DELETE "/:id"', () => {
  test('DELETE "/:id" deletes given pet and returns updated list', async () => {
    const res = await requestWithSupertest.delete("/pets/2");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Rexo",
        type: "dogo",
        age: 4,
        breed: "doberman",
      },
      {
        id: 3,
        name: "Mittens",
        type: "cat",
        age: 2,
        breed: "tabby",
      },
      {
        id: 4,
        name: "Salame",
        type: "cat",
        age: 6,
        breed: "pinky",
      },
    ]);
  });
});
