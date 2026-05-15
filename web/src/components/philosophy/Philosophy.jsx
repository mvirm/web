import philosophy from "../../assets/titles/philosophy.svg";
import PhilosophyCardsContainer from "./philosophyCardsContainer";
import PhilophyFinallyCard from "./PhilophyFinallyCard";

const Philosophy = () => {
  return (
    <div
      id="about"
      className="services-projects-philosophy-container philosophyLayout"
    >
      <img src={philosophy} alt="forma de pensar" />
      <p className="bg-linen mb-0 pb-4">
        Vengo de trabajar durante años en entornos donde el error no era una
        opción. Ahí aprendí a entender procesos, detectar problemas reales y
        buscar soluciones que funcionen de verdad. <br /> Cuando comencé en el
        desarrollo, no lo hice solo para programar, sino para llevar esa lógica
        a productos digitales.
      </p>
      <div className="bg-linen -mt-4">
        <PhilosophyCardsContainer />
        <PhilophyFinallyCard />
      </div>
    </div>
  );
};
export default Philosophy;
