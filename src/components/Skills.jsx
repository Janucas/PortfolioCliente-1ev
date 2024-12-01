import data from '../data/data.json';

function Skills() {
  return (
    <section id="skills" className="mb-5">
      <h2>Skills</h2>
      {Object.entries(data.skills).map(([category, skills], index) => (
        <div key={index}>
          <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
