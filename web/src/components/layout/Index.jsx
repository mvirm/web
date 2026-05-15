import Hero from "../hero/Hero.jsx";
import ServicesAndBenefits from "./ServicesAndBenefits.jsx";
import ProjectsAndProcesses from "./ProjectsAndProcesses.jsx";
import isotype from "../../assets/background/isotype.svg";
import PhilosophyAndFinallyCta from "./PhilosophyAndFinallyCta.jsx";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen gap-0">
      <Hero />
      <ServicesAndBenefits />
      <ProjectsAndProcesses />
      <div className="w-full bg-linen flex-1 items-center pb-8">
        <img src={isotype} alt="" className="w-full" />
      </div>
      <PhilosophyAndFinallyCta />
    </div>
  );
};

export default Index;
