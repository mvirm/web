import services from "../../assets/titles/services.svg";
import ServicesCardContainer from "./ServicesCardContainer";
const Services = () => {
  return (
    <div
      id="services"
      className="services-projects-philosophy-container servicesLayout"
    >
      <img src={services} alt="Servicios" />
      <p>
        Soluciones digitales diseñadas para resolver problemas reales y
        acompañar el crecimiento de tu proyecto y/o negocio
      </p>
      <ServicesCardContainer />
    </div>
  );
};
export default Services;
