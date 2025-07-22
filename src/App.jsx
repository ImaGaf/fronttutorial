import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pc, setPc] = useState(null);

  useEffect(() => {
    const pcData = {
      computerBrand: "Dell",
      computerModel: "Inspiron 15 3000",
      category: "Portátil",
      assignedTo: "Juan Pérez",
      archived: false
    };
    setPc(pcData);
  }, []);

  return (
    <div className="App p-4">
      <h1>Información de la PC</h1>
      {pc ? (
        <div className="pc-info">
          <p><strong>Marca:</strong> {pc.computerBrand}</p>
          <p><strong>Modelo:</strong> {pc.computerModel}</p>
          <p><strong>Categoría:</strong> {pc.category}</p>
          <p><strong>Asignado a:</strong> {pc.assignedTo}</p>
          <p><strong>Archivada:</strong> {pc.archived ? "Sí" : "No"}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default App;
