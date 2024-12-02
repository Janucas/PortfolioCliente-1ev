import { useState, useEffect } from "react"; 
import "./Experience.css"; 

function Experience() {
  const [experience, setExperience] = useState([]); 

  useEffect(() => {
    fetch("/src/data/experience.json") // Conecto con el JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data"); 
        }
        return response.json(); 
      })
      .then((data) => setExperience(data)) 
      .catch((error) => console.error("Error fetching experience data:", error)); 
  }, []); 

  return (
    <section id="experience" className="experience"> 
      <h2 className="experience-title">Experience</h2> 
      {experience.length > 0 ? ( 
        <ul className="experience-list">
          {experience.map((item, index) => ( 
            <li key={index} className="experience-item">
              <img
                src={item.image} 
                alt={item.role} 
                className="experience-image"
              />
              <div className="experience-details"> 
                <h3>{item.role}</h3> 
                <p>{item.company}</p> 
                <p>{item.description}</p> 
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading experience data...</p> 
      )}
      <div className="experience-cv"> 
        <a
          href="/src/assets/CV Juan Antonio Núñez Castaño.pdf" 
          download="CV_Juan_Antonio_Núñez_Castaño.pdf" 
          className="experience-cv-link"
        >
          Download Juan Antonio CV 
        </a>
      </div>
    </section>
  );
}

export default Experience; 
