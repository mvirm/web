import cta from "../../assets/titles/cta.svg";
import check from "../../assets/icons/check.svg";
import PricesCardContainer from "../prices/PricesCardContainer";

const FinallyCta = () => {
  return (
    <div id="prices" className="benefits-process-finallyCTA-container">
      <section>
        <img src={cta} alt="llamado a la accion" />
      </section>
      <p>
        Trabajo con proyectos en distintas etapas: desde quienes están
        empezando, hasta quienes necesitan mejorar lo que ya tienen.
      </p>
      <section className="finallyCta">
        <div>
          <img src={check} alt="Check" />
          <span>
            Si estás por crear algo desde cero, podemos darle forma desde el
            inicio.
          </span>
        </div>
        <div>
          <img src={check} alt="Check" />
          <span>
            Si sentis que lo que tenés hoy no está funcionando como debería,
            probablemente podamos mejorarlo.
          </span>
        </div>
      </section>
      <PricesCardContainer />
    </div>
  );
};
export default FinallyCta;
