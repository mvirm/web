import Projects from "../projects/Projects";
import Processes from "../process/Processes";
import CTASection from "../utils/CTASection";

const ProjectsAndProcesses = () => {
  return (
    <div className="border-2 border-red-500 -bottom-10">
      <Projects />
      <Processes />
      <div className="projects-processes-ctaContainer">
        <CTASection
          text={"¿Empezamos a trabajar juntos?"}
          buttonText={"coordinemos una charla"}
        />
      </div>
    </div>
  );
};

export default ProjectsAndProcesses;
