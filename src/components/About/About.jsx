import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <img
        src="/src/assets/profile.jpeg"
        alt="Profile"
        className="about-photo"
      />
      <h1 className="about-name">Juan Antonio Núñez Castaño</h1>
      <p className="about-profession"><b>Web Developer Student</b></p>
      <p className="about-description">
      Me considero una persona ambiciosa y persistente en todo lo que hago y siempre
       me gusta continuar creciendo y aprendiendo en todo lo que hago para poder mejorar. 
       Ademas soy una persona simpática y extrovertida con buenas habilidades sociales que
        me facilitan mucho el trato con las personas tanto dentro como fuera de lo profesional.
         Soy un chico inquieto al que le encanta el deporte e involiucrarse en otro tipo de 
         proyectos externos que puedan aportar beneficios a mi vida.

      </p>
    </section>
  );
}

export default About;
