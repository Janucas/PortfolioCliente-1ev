import data from '../data/data.json';

function Experience() {
  return (
    <section id="experience" className="mb-5">
      <h2>Work Experience</h2>
      <ul>
        {data.experience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong> at {exp.company} ({exp.years})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
