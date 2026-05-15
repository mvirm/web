import benefits from "../../assets/titles/benefits.svg";
import BenefitsCardContainer from "./BenefitsCardContainer";

const Benefits = () => {
  return (
    <div id="benefits" className="benefits-process-finallyCTA-container">
      <section>
        <img src={benefits} alt="Beneficios" />
      </section>
      <p>
        Entiendo lo que necesitás y lo transformo en una solución clara,
        funcional y bien diseñada.
      </p>
      <BenefitsCardContainer />
    </div>
  );
};
export default Benefits;
