import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const PetList = lazy(() => import("./pages/PetList"));
const PetDetail = lazy(() => import("./pages/PetDetail"));
const EditPet = lazy(() => import("./pages/EditPet"));
const AddPet = lazy(() => import("./pages/AddPet"));

/**
 * Aquí solo estamos definiendo nuestras rutas.
 * Tendremos 4 rutas principales en nuestra aplicación,
 * cada una correspondiente a una vista diferente:
 *
 * - Uno para ver la lista completa de mascotas.
 * - Uno para ver el detalle de una sola mascota.
 * - Uno para editar una sola mascota.
 * - Uno para agregar una nueva mascota a la lista.
 *
 * Además, tenemos un botón para agregar una nueva mascota
 * y un estado que almacenará la información de la mascota que queremos editar.
 */

function App() {
  const [petToEdit, setPetToEdit] = useState(null);

  return (
    <div className="App">
      <Router>
        <h1>Pet shelter</h1>

        <Link to="/add">
          <button>Add new pet</button>
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <PetList />
              </Suspense>
            }
          />

          <Route
            path="/:petId"
            element={
              <Suspense fallback={<></>}>
                <PetDetail setPetToEdit={setPetToEdit} />
              </Suspense>
            }
          />

          <Route
            path="/:petId/edit"
            element={
              <Suspense fallback={<></>}>
                <EditPet petToEdit={petToEdit} />
              </Suspense>
            }
          />

          <Route
            path="/add"
            element={
              <Suspense fallback={<></>}>
                <AddPet />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
