import data from '../data/data.json';

function Projects() {
  return (
    <section id="projects" className="mb-5">
      <h2>Projects</h2>
      <div className="row">
        {data.projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
