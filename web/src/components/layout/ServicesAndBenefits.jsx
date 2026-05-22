import Services from "../services/Services";
import Benefits from "../benefits/Benefits";
import CTASection from "../utils/CTASection";
const ServicesAndBenefits = ({ setShowModal }) => {
  return (
    <div>
      <Services />
      <Benefits />
      <div className="service-benefits-ctaContainer">
        <CTASection
          text={"¿Tenés una idea o una necesidad concreta?"}
          buttonText={"hablemos"}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};
export default ServicesAndBenefits;
