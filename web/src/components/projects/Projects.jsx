import projects from "../../assets/titles/projects.svg";
import ProjectsContainer from "./ProjectsContainer";
import substractProjects from "../../assets/background/substractProjects.svg";
const Projects = () => {
  return (
    <div className="hero-project-container projectsPictureLayout">
      <picture>
        <img src={substractProjects} alt="" />
      </picture>
      <div
        id="projects"
        className="services-projects-philosophy-container projectsLayout"
      >
        <img src={projects} alt="Proyectos" />
        <p>
          Cada proyecto nace de un problema concreto. Estas son algunas formas
          en las que trabaje para resolverlos
        </p>
        <ProjectsContainer />
      </div>
    </div>
  );
};
export default Projects;
