/**
 * Hay tres entrenamientos insertados.
 * Un entrenamiento consiste en una identificación, nombre, modo, equipo, ejercicios,
 * createdAt, updatedAt y trainerTips.
 *
 * Devolvamos todos los entrenamientos que están almacenados y comencemos implementando
 * el método correspondiente dentro de nuestra capa de acceso a datos.
 *
 * Se elegio nombrar el método dentro de aquí igual que el del servicio y el controlador. (Opcional)
 */

const DB = require("./db.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };
