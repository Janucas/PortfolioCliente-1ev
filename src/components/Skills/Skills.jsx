import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJenkins, SiPython,  } from "react-icons/si";


//genero los iconos de forma interna gracias a npm install react-icons  
function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },

    ],
    tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Jenkins", icon: <SiJenkins /> },
    ],
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
                <li key={idx} className="skills-item">
                  <span className="skills-icon">{skill.icon}</span>
                  <span className="skills-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
