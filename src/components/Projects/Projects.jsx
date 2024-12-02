import "./Projects.css"; 
import { useEffect, useState } from "react"; 

// Componente para mostrar la tarjeta de un proyecto
const ProjectCard = ({ project, test = false, onDelete }) => {
  // Función para eliminar un proyecto
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/v1/projects/${project.project_id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error deleting project"); 
        }
        return res.json();
      })
      .then(() => {
        alert(`Project "${project.project_name}" deleted successfully.`); // Notifica al usuario tras eliminar
        onDelete(project.project_id); // DEBERIA ACTUALIZAR la lista de proyectos tras cerrar el alert
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while deleting the project."); 
      });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{project.project_name}</h2> 
      <p className="mt-2 text-gray-600">{project.description}</p> 
      {test && (
        <button onClick={handleDelete} className="btn btn-danger mt-4">
          Eliminar
        </button>
      )}
    </div>
  );
};

// Componente principal para gestionar la lista de proyectos
function Projects() {
  const [projects, setProjects] = useState([]); 
  const [pageable, setPageable] = useState({
    pageNumber: 0,
    pageSize: 8,
    totalPages: 1,
    totalElements: 0,
  }); 
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [searchMode, setSearchMode] = useState(false); // Indica si está en modo de búsqueda

  // Efecto para cargar proyectos al cambiar de página o salir del modo de búsqueda
  useEffect(() => {
    if (!searchMode) {
      fetchProjects(pageable.pageNumber);
    }
  }, [pageable.pageNumber, searchMode]);

  // Función para obtener la lista de proyectos
  const fetchProjects = (page) => {
    fetch(`http://localhost:8080/api/v1/projects/show?page=${page}&size=${pageable.pageSize}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching projects"); 
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data.content || []); 
        setPageable({
          pageNumber: data.pageable.pageNumber,
          pageSize: data.pageable.pageSize,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        }); 
      })
      .catch((error) => console.error("Error:", error));
  };

  // Función para manejar el input de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para buscar proyectos
  const searchProjects = () => {
    if (searchTerm.trim().length < 3) {
      alert("Debes ingresar al menos 3 letras para buscar.");
      return;
    }

    fetch(`http://localhost:8080/api/v1/projects/${searchTerm}?page=0&size=${pageable.pageSize}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error searching projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data.content || []); 
        setPageable({
          pageNumber: data.pageable.pageNumber,
          pageSize: data.pageable.pageSize,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        });
        setSearchMode(true); // Activa el modo de búsqueda
      })
      .catch((error) => console.error("Error:", error));
  };

  // Función para limpiar la búsqueda
  const clearSearch = () => {
    setSearchTerm("");
    setSearchMode(false);
    fetchProjects(0); 
  };

  // Función para avanzar a la siguiente página
  const nextPage = () => {
    if (!searchMode && pageable.pageNumber < pageable.totalPages - 1) {
      setPageable((prev) => ({ ...prev, pageNumber: prev.pageNumber + 1 }));
    } else if (searchMode) {
      fetchSearchPage(pageable.pageNumber + 1);
    }
  };

  // Función para retroceder a la página anterior
  const prevPage = () => {
    if (!searchMode && pageable.pageNumber > 0) {
      setPageable((prev) => ({ ...prev, pageNumber: prev.pageNumber - 1 }));
    } else if (searchMode && pageable.pageNumber > 0) {
      fetchSearchPage(pageable.pageNumber - 1);
    }
  };

  // Función para obtener una página de resultados de búsqueda
  const fetchSearchPage = (page) => {
    fetch(`http://localhost:8080/api/v1/projects/${searchTerm}?page=${page}&size=${pageable.pageSize}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching search results");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data.content || []);
        setPageable({
          pageNumber: data.pageable.pageNumber,
          pageSize: data.pageable.pageSize,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  // Función para manejar la eliminación de un proyecto
  const handleDeleteProject = (id) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.project_id !== id));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-search-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
          className="projects-search"
        />
        <button onClick={searchProjects} className="btn btn-primary projects-search-btn">Search</button>
        {searchMode && (
          <button onClick={clearSearch} className="btn btn-primary projects-clear-btn">
            Clear Search
          </button>
        )}
      </div>
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.project_id}
              project={project}
              test={true} // Habilita el botón de eliminar
              onDelete={handleDeleteProject}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
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
