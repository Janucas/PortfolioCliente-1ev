import { useState, useEffect } from "react"; // Importamos los hooks de React para manejar estado y efectos
import "./References.css"; // Importamos los estilos específicos para la sección de referencias

function References() {
  const [references, setReferences] = useState([]); // Inicializamos el estado 'references' como un array vacío

  //para cargar los datos al montar el componente
  useEffect(() => {
    fetch("/src/data/references.json") // llamo al JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data"); // Lanzamos un error si falla
        }
        return response.json(); // Convierto respuesta a JSON
      })
      .then((data) => setReferences(data)) 
      .catch((error) => console.error("Error fetching references data:", error)); 
  }, []); 

  return (
    <section id="references" className="references">
      <h2 className="references-title">References</h2>
      {references.length > 0 ? ( // Si hay datos en 'references', los mostramos en una lista
        <ul className="references-list">
          {references.map((ref, index) => (
            <li key={index} className="references-item">
              <img
                src={ref.photo} 
                alt={ref.name}  
                className="references-photo"
              />
              <div className="references-content">
                <h3>{ref.name}</h3> 
                <p>{ref.contact}</p> 
                <p>{ref.description}</p> 
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading references data...</p> // Mensaje mostrado mientras los datos están cargando
      )}
    </section>
  );
}

export default References; // Exportamos el componente para que pueda usarse en otros archivos
