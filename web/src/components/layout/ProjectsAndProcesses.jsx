import Projects from "../projects/Projects";
import Processes from "../process/Processes";
import CTASection from "../utils/CTASection";

const ProjectsAndProcesses = ({ setShowModal }) => {
  return (
    <div className=" -bottom-10">
      <Projects />
      <Processes />
      <div className="projects-processes-ctaContainer">
        <CTASection
          text={"¿Empezamos a trabajar juntos?"}
          buttonText={"coordinemos una charla"}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default ProjectsAndProcesses;
