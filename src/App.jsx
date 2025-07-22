import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pcs, setPcs] = useState([]);
  const [archivedCount, setArchivedCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backendcloud-z9g5.onrender.com/pcs")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener PCs");
        return res.json();
      })
      .then((data) => {
        setPcs(data);

        const count = data.filter(pc => pc.archived).length;
        setArchivedCount(count);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="App p-4">
      <h1>Listado de PCs</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <p><strong>Total PCs:</strong> {pcs.length}</p>
      <p><strong>Archivadas:</strong> {archivedCount}</p>

      <hr />

      {pcs.map((pc, index) => (
        <div key={index} className="pc-info" style={{ marginBottom: '1rem' }}>
          <p><strong>Marca:</strong> {pc.computerBrand}</p>
          <p><strong>Modelo:</strong> {pc.computerModel}</p>
          <p><strong>Categoría:</strong> {pc.category || "No especificada"}</p>
          <p><strong>Asignado a:</strong> {pc.assignedTo || "Desconocido"}</p>
          <p><strong>Archivada:</strong> {pc.archived ? "Sí" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
