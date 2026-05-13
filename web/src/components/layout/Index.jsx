import Hero from "../hero/Hero.jsx";
import ServicesAndBenefits from "./ServicesAndBenefits.jsx";
import ProjectsAndProcesses from "./ProjectsAndProcesses.jsx";
import Philosophy from "../philosophy/Philosophy.jsx";
import isotype from "../../assets/background/isotype.svg";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen gap-0">
      <Hero />
      <ServicesAndBenefits />
      <ProjectsAndProcesses />
      <div className="w-full bg-linen flex-1 items-center pb-4">
        <img src={isotype} alt="" className="w-full" />
      </div>
      <Philosophy />
    </div>
  );
};

export default Index;
