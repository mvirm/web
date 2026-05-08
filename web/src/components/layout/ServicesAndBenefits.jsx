import Services from "../services/Services";
import Benefits from "../benefits/Benefits";
const ServicesAndBenefits = () => {
  return (
    <div>
      <Services />
      <Benefits />
      <div className="service-benefits-ctaContainer">
        <section>
          <span>¿Tenés una idea o una necesidad concreta?</span>
          <button>hablemos</button>
        </section>
      </div>
    </div>
  );
};
export default ServicesAndBenefits;
