import Hero from "../hero/Hero.jsx";
import ServicesAndBenefits from "./ServicesAndBenefits.jsx";
import Services from "../services/Services.jsx";
import Benefits from "../benefits/Benefits.jsx";
import Projects from "../projects/Projects.jsx";
import Process from "../process/Process.jsx";
import Philosophy from "../philosophy/Philosophy.jsx";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen gap-0">
      <Hero />
      <ServicesAndBenefits />
      <Projects />
      <Process />
      <Philosophy />
    </div>
  );
};

export default Index;
