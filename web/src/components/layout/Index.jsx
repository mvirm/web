import { useState } from "react";
import FormModal from "../form/FormModal.jsx";
import Hero from "../hero/Hero.jsx";
import ServicesAndBenefits from "./ServicesAndBenefits.jsx";
import ProjectsAndProcesses from "./ProjectsAndProcesses.jsx";
import isotype from "../../assets/background/isotype.svg";
import PhilosophyAndFinallyCta from "./PhilosophyAndFinallyCta.jsx";
import Footer from "../footer/Footer.jsx";
import InitialLoading from "../InitialLoading/InitialLoading.jsx";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simula una carga inicial de 5 segundos
  setTimeout(() => {
    setIsLoading(false);
  }, 5500);

  return (
    <main className="min-h-screen max-w-screen gap-0">
      {isLoading ? (
        <InitialLoading />
      ) : (
        <>
          <Hero setShowModal={setShowModal} />
          <ServicesAndBenefits setShowModal={setShowModal} />
          <ProjectsAndProcesses setShowModal={setShowModal} />
          <div className="w-full bg-linen flex-1 items-center pb-8 mt-0 md:mt-2 lg:mt-4">
            <img src={isotype} alt="isotipo" className="w-full" />
          </div>
          <PhilosophyAndFinallyCta setShowModal={setShowModal} />
          <Footer setShowModal={setShowModal} />
        </>
      )}
      {showModal && <FormModal setShowModal={setShowModal} />}
    </main>
  );
};

export default Index;
