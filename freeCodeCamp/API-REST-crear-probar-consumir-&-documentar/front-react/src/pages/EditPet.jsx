/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

/**
 * Archivo encargado de editar un registro de mascotas:
 *
 * Esto se comporta de manera muy similar al AddPet.jsx archivo.
 * La única diferencia es que los estados de información de nuestra mascota se inicializan
 * con los valores de la mascota que queremos editar.
 *
 * Cuando el usuario actualiza esos valores, construimos un objeto que será el cuerpo de nuestra
 * solicitud y enviamos la solicitud con la información actualizada.
 */

// eslint-disable-next-line react/prop-types
function EditPet({ petToEdit }) {
  const [petName, setPetName] = useState(petToEdit?.name);
  const [petType, setPetType] = useState(petToEdit?.type);
  const [petAge, setPetAge] = useState(petToEdit?.age);
  const [petBreed, setPetBreed] = useState(petToEdit?.breed);

  const editPet = async () => {
    try {
      const petData = {
        id: petToEdit.id,
        name: petName,
        type: petType,
        age: petAge,
        breed: petBreed,
      };

      /* FETCH */
      // const response = await fetch(`http://localhost:3000/pets/${petToEdit.id}`, {
      //     method: 'PUT',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(petData)
      // })

      /* AXIOS */
      const response = await axios.put(
        `http://localhost:3000/pets/${petToEdit.id}`,
        petData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        window.location.href = `/${petToEdit.id}`;
      }
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
      <h2>Edit Pet</h2>

      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <label>Pet name</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <label>Pet type</label>
        <input
          type="text"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <label>Pet age</label>
        <input
          type="text"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <label>Pet breed</label>
        <input
          type="text"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
        />
      </div>

      <button style={{ marginTop: 30 }} onClick={() => editPet()}>
        Save changes
      </button>
    </div>
  );
}

export default EditPet;
