/**
 * Como puede ver, el extremo 1 solo devuelve un mensaje de saludo.
 * Los extremos 2 y 3 son adaptaciones de las funciones ejemplos de JS estándar.
 *
 * Ahora reciben los parámetros dentro de la solicitud y los valores de retorno van en la respuesta.
 */

/* Import and initialize express */
const express = require("express");
const app = express();
const server = require("http").Server(app);

/* Global middlewares */
app.use(express.json());

/* Endpoint 1 */
app.get("/", async (req, res) => {
  try {
    res.status(200).json({ greeting: "Hello there!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

/* Endpoint 2 */
app.get("/isPalindrome", async (req, res) => {
  try {
    const string = req.body.string;
    let result = true;
    let left = 0;
    let right = string.length - 1;

    while (left < right && result) {
      if (string[left] === string[right]) {
        left += 1;
        right -= 1;
      } else result = false;
    }

    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).send(err);
  }
});

/* Endpoint 3 */
app.get("/twoSum", async (req, res) => {
  try {
    const nums = JSON.parse(req.body.nums);
    const target = JSON.parse(req.body.target);

    let result = false;

    for (let i = 0; i < nums.length; i++) {
      const neededNum = target - nums[i];
      if (nums.indexOf(neededNum) !== -1 && nums.indexOf(neededNum) !== i)
        result = [nums[i], nums[nums.indexOf(neededNum)]];
    }

    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).send(err);
  }
});

/* Export server object */
module.exports = server;

/* Initialize server */
server.listen(3001, () => console.log("Server is listening."));
server.on("error", (error) => console.error(error));
