import "./Experience.css";

function Experience() {
  const experience = [
    {
      role: "Frontend Developer",
      company: "Tech Corp",
      description: "Developed interactive user interfaces using React and Vue.",
    },
    {
      role: "Backend Developer",
      company: "Backend Solutions",
      description: "Built RESTful APIs and managed databases.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <ul className="experience-list">
        {experience.map((item, index) => (
          <li key={index} className="experience-item">
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
