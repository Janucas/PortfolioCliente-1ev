import "./Skills.css";

function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "Docker", "Jenkins"],
  };

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.toUpperCase()}</h3>
            <ul className="skills-list">
              {skills[category].map((skill, idx) => (
                <li key={idx} className="skills-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
