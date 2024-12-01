import data from '../data/data.json';

function Education() {
  return (
    <section id="education" className="mb-5">
      <h2>Education</h2>
      <ul>
        {data.education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
