import { useState, useEffect } from "react"; 
import "./Education.css"; 

function Education() {
  const [education, setEducation] = useState([]); 

  // Cargar datos desde un archivo JSON 
  useEffect(() => {
    fetch("/src/data/education.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      })
      .then((data) => setEducation(data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <section id="education" className="education">
      <h2 className="education-title">Education</h2>
      {education.length > 0 ? ( // Mostrar datos si están cargados
        <ul className="education-list">
          {education.map((item, index) => (
            <li key={index} className="education-item">
              <div className="education-content">
                <img
                  src={item.image}
                  alt={`Image for ${item.degree}`}
                  className="education-image"
                />
                <div className="education-text">
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <p>{item.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading education data...</p> 
      )}
    </section>
  );
}

export default Education; 
