/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

/**
 * Aquí tenemos dos tipos diferentes de solicitudes:
 *
 * Uno que obtiene la información de la mascota dada (Muy similar petList).
 * La única diferencia aquí es que estamos pasando un parámetro de URL a nuestro punto final,
 * que al mismo tiempo estamos leyendo desde la URL en nuestra aplicación front-end.
 *
 * La otra solicitud es eliminar la mascota dada de nuestro registro.
 * La diferencia aquí es que una vez que confirmamos que la solicitud fue exitosa,
 * redirigimos al usuario a la raíz de nuestra aplicación.
 */
function PetDetail({ setPetToEdit }) {
  const [pet, setPet] = useState([]);

  const { petId } = useParams();

  const getPet = async () => {
    try {
      /* FETCH */
      // const response = await fetch(`http://localhost:3000/pets/${petId}`)
      // const data = await response.json()
      // if (response.status === 200) {
      //     setPet(data)
      //     setPetToEdit(data)
      // }

      /* AXIOS */
      const response = await axios.get(`http://localhost:3000/pets/${petId}`);
      if (response.status === 200) {
        setPet(response.data);
        setPetToEdit(response.data);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getPet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePet = async () => {
    try {
      /* FETCH */
      // const response = await fetch(`http://localhost:3000/pets/${petId}`, {
      //     method: 'DELETE'
      // })

      /* AXIOS */
      const response = await axios.delete(
        `http://localhost:3000/pets/${petId}`
      );

      if (response.status === 200) window.location.href = "/";
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligniItems: "center",
      }}
    >
      <h2>Pet Detail</h2>

      {pet && (
        <>
          <p>Pet name: {pet.name}</p>
          <p>Pet type: {pet.type}</p>
          <p>Pet age: {pet.age}</p>
          <p>Pet breed: {pet.breed}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              aligniItems: "center",
            }}
          >
            <Link to={`/${pet?.id}/edit`}>
              <button style={{ marginRight: 10 }}>Edit pet</button>
            </Link>

            <button style={{ marginLeft: 10 }} onClick={() => deletePet()}>
              Delete pet
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PetDetail;
