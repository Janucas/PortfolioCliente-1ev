import "./Projects.css";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [pageable, setPageable] = useState({
    pageNumber: 0,
    pageSize: 8, // Cambia el tamaño de la página según lo necesites
    totalPages: 1,
    totalElements: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProjects(pageable.pageNumber);
  }, [pageable.pageNumber]);

  const fetchProjects = (page) => {
    fetch(`http://localhost:8080/api/v1/projects/show?page=${page}&size=${pageable.pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.content);
        setPageable({
          pageNumber: data.pageable.pageNumber,
          pageSize: data.pageable.pageSize,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        });
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const nextPage = () => {
    if (pageable.pageNumber < pageable.totalPages - 1) {
      setPageable((prev) => ({ ...prev, pageNumber: prev.pageNumber + 1 }));
    }
  };

  const prevPage = () => {
    if (pageable.pageNumber > 0) {
      setPageable((prev) => ({ ...prev, pageNumber: prev.pageNumber - 1 }));
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={handleSearch}
        className="projects-search"
      />
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.project_id} className="project-card">
            <img
              src={project.picture || "https://via.placeholder.com/150"}
              alt={project.project_name}
              className="project-image"
            />
            <h3>{project.project_name}</h3>
            <p>{project.description}</p>
            <a href={project.repository_url} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        ))}
      </div>
      <div className="projects-pagination">
        <button onClick={prevPage} disabled={pageable.pageNumber === 0}>
          Previous
        </button>
        <span>
          Page {pageable.pageNumber + 1} of {pageable.totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={pageable.pageNumber >= pageable.totalPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Projects;
