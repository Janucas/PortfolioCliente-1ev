import "./Education.css";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Technological Branch and E.S.O certificate",
      institution: "I.E.S Cantillana",
      period: "2014 - 2020",
      image: "/src/assets/iesCantillana.jpg", // URL de la imagen
    },
    {
      degree: "Web Developer Degree",
      institution: "I.E.S Jacarada and I.E.S Santa Joaquina de Vedruna",
      period: "2020 - Nowadays",
      image: "/src/assets/vedruna.png", // URL de la imagen
    },
    {
      degree: "B1 and B2 English Certificate",
      institution: "Easy Study Academy",
      period: "2016 and 2018",
      image: "/src/assets/easyStudy.jpg", // URL de la imagen
    },
    {
      degree: "Life Guard Certificate",
      institution: "Ympetu",
      period: "2020",
      image: "/src/assets/ympetu.webp", // URL de la imagen
    },
  ];

  return (
    <section id="education" className="education">
      <h2 className="education-title">Education</h2>
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
    </section>
  );
}

export default Education;
