/**
 * Los controladores son las funciones que activará cada solicitud de punto final.
 * Se reciben como parámetros los objetos de solicitud y respuesta.
 *
 * En el objeto de solicitud podemos leer cosas como la URL o los parámetros del cuerpo,
 * y usaremos el objeto de respuesta para enviar nuestra respuesta después de hacer
 * el cálculo correspondiente.
 *
 * Cada controlador llama a una función específica definida en nuestros modelos.
 */

import {
  getItem,
  listItems,
  editItem,
  addItem,
  deleteItem,
} from "../models/pets.models.js";

export const getPet = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const listPets = (req, res) => {
  try {
    const resp = listItems();
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const editPet = (req, res) => {
  try {
    const resp = editItem(parseInt(req.params.id), req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addPet = (req, res) => {
  try {
    const resp = addItem(req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deletePet = (req, res) => {
  try {
    const resp = deleteItem(parseInt(req.params.id));
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};
