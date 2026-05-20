import { useState } from "react";
import FormModal from "../form/FormModal.jsx";
import Hero from "../hero/Hero.jsx";
import ServicesAndBenefits from "./ServicesAndBenefits.jsx";
import ProjectsAndProcesses from "./ProjectsAndProcesses.jsx";
import isotype from "../../assets/background/isotype.svg";
import PhilosophyAndFinallyCta from "./PhilosophyAndFinallyCta.jsx";
import Footer from "../footer/Footer.jsx";

const Index = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="min-h-screen max-w-screen gap-0">
      <Hero />
      <ServicesAndBenefits />
      <ProjectsAndProcesses />
      <div className="w-full bg-linen flex-1 items-center pb-8">
        <img src={isotype} alt="" className="w-full" />
      </div>
      <PhilosophyAndFinallyCta />
      <Footer />
      {showModal && <FormModal />}
    </div>
  );
};

export default Index;
