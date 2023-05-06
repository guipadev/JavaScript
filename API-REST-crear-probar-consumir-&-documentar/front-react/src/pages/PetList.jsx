/**
 * Archivo responsable de representar la lista completa de mascotas:
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * Lógicamente tenemos 3 cosas principales aquí:
 *
 * - Un estado que almacena la lista de mascotas para renderizar.
 * - Una función que ejecuta la petición correspondiente a nuestra API.
 * - Un useEffect que ejecuta esa función cuando el componente se renderiza.
 *
 * La sintaxis para realizar la solicitud HTTP con Axios es más breve.
 * Una vez que hacemos la solicitud, verificamos si el estado es 200
 * y almacenamos la respuesta en nuestro estado.
 *
 * Una vez que se actualice nuestro estado, el componente generará los datos
 * proporcionados por nuestra API.
 */
function PetList() {
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      /* FETCH */
      // const response = await fetch('http://localhost:3000/pets')
      // const data = await response.json()
      // if (response.status === 200) setPets(data)

      /* AXIOS */
      const response = await axios.get("http://localhost:3000/pets");
      if (response.status === 200) setPets(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <h2>Pet List</h2>

      {pets?.map((pet) => {
        return (
          <div key={pet?.id}>
            <p>
              {pet?.name} - {pet?.type} - {pet?.breed}
            </p>

            <Link to={`/${pet?.id}`}>
              <button>Pet detail</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PetList;
