import data from '../data/data.json';

function About() {
  const { name, photo, profession, description } = data.about;

  return (
    <section id="about" className="mb-5">
      <h2>About Me</h2>
      <img src={photo} alt={name} className="img-thumbnail mb-3" width="150" />
      <h3>{name}</h3>
      <p>{profession}</p>
      <p>{description}</p>
    </section>
  );
}

export default About;
