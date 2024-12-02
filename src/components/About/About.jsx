import data from '../../data/data.json'; 
import './About.css'; 

function About() {
  return (
    <section id="about" className="about"> 
      <img
        src={data.about.photo} // Ruta de la imagen desde el JSON
        alt="Profile"
        className="about-photo"
      />
      <h1 className="about-name">{data.about.name}</h1> 
      <p className="about-profession"><b>{data.about.profession}</b></p> 
      <p className="about-description">{data.about.description}</p> 
    </section>
  );
}

export default About; 
