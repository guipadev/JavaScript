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

const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

module.exports = {
  getAllWorkouts,

  createNewWorkout,
};
