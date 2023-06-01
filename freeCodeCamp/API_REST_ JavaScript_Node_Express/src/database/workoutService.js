/**
 * Devolver todos los entrenamientos es bastante simple y no tenemos que hacer transformaciones
 * porque ya es un archivo JSON. Tampoco necesitamos aceptar ningún argumento por ahora.
 */

const Workout = require("../database/Workout");
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = () => {
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
