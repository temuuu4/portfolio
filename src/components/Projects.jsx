function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Begena App</h3>
          <p>
            A React-based web application built to practice component-based
            UI development and state management.
          </p>
          <span className="tech">React • JavaScript</span>

          <div className="project-links">
            <a
              href="https://github.com/temuuu4/begena-app"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://begena-app.vercel.app/"
              className="btn btn-outline"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Mini-Market App</h3>
          <p>
            A Flask web application that simulates a mini-market system,
            focusing on backend logic and basic CRUD operations.
          </p>
          <span className="tech">Python • Flask</span>

          <div className="project-links">
            <a
              href="https://github.com/temuuu4/mini_shop0"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Country Info Finder</h3>
          <p>
            A React application that fetches and displays country information
            using public APIs.
          </p>
          <span className="tech">React • API</span>

          <div className="project-links">
            <a
              href="https://github.com/temuuu4/country-info-finder"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://begena-app-w9pk.vercel.app"
              className="btn btn-outline"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
