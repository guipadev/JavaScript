/**
 * Nos burlamos de la solicitud conrequestWithSupertest.get('/')
 * Luego "rompemos" el res objeto en pedazos y afirmamos cada parte del mismo:
 * Verifique el estado de la respuesta: expect(res.status).toEqual(200)
 * Revisa el formato de respuesta: expect(res.type).toEqual(expect.stringContaining('json'))
 * Compruebe el contenido del cuerpo de la respuesta:expect(res.body).toEqual({ greeting: "Hello there!" })
 */

// app.test.js
const supertest = require("supertest"); // Import supertest
const server = require("./app"); // Import the server object
const requestWithSupertest = supertest(server); // We will use this function to mock HTTP requests

afterEach((done) => {
  // afterEach function is provided by Jest and executes once all tests are finished
  server.close(); // We close the server connection once all tests have finished
  done();
});

test('GET "/" returns greeting', async () => {
  const res = await requestWithSupertest.get("/");
  expect(res.status).toEqual(200);
  expect(res.type).toEqual(expect.stringContaining("json"));
  expect(res.body).toEqual({ greeting: "Hello there!" });
});

/**
 * Las otras pruebas son muy similares,
 * excepto que enviamos datos en los cuerpos de las solicitudes simuladas
 */

describe("/isPalindrome", () => {
  test('GET "/isPalindrome" neuquen returns true', async () => {
    const res = await requestWithSupertest
      .get("/isPalindrome")
      .set("Content-type", "application/json")
      .send({ string: "neuquen" });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ result: true });
  });

  test('GET "/isPalindrome" bariloche returns true', async () => {
    const res = await requestWithSupertest
      .get("/isPalindrome")
      .set("Content-type", "application/json")
      .send({ string: "bariloche" });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ result: false });
  });
});

describe("/twoSum", () => {
  test('GET "/twoSum" [2,7,11,15] and 9 returns [7, 2]', async () => {
    const res = await requestWithSupertest
      .get("/twoSum")
      .set("Content-type", "application/json")
      .send({ nums: "[2,7,11,15]", target: "9" });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ result: [7, 2] });
  });

  test('GET "/twoSum" [3,2,4] and 6 returns [4, 2]', async () => {
    const res = await requestWithSupertest
      .get("/twoSum")
      .set("Content-type", "application/json")
      .send({ nums: "[3,2,4]", target: "6" });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ result: [4, 2] });
  });

  test('GET "/twoSum" [3,2,4] and 10 returns false', async () => {
    const res = await requestWithSupertest
      .get("/twoSum")
      .set("Content-type", "application/json")
      .send({ nums: "[3,2,4]", target: "10" });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ result: false });
  });
});
