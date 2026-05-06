import services from "../../assets/titles/services.svg";
import ServicesCardContainer from "./ServicesCardContainer";
const Services = () => {
  return (
    <div
      id="services"
      className="border-2 border-green-700 -top-10 md:-top-18 lg:-top-36 -mb-10 md:-mb-18 lg:-mb-36 relative"
    >
      <img
        src={services}
        alt="Servicios"
        className="max-w-24 h-auto md:max-w-44 lg:max-w-96"
      />
      <p className="text-xs md:text-sm lg:text-lg mt-2 lg:mt-12 w-full">
        Soluciones digitales diseñadas para resolver problemas reales y
        acompañar el crecimiento de tu proyecto y/o negocio
      </p>
      <ServicesCardContainer />
    </div>
  );
};
export default Services;
