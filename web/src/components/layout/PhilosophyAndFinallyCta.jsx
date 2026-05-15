import Philosophy from "../philosophy/Philosophy";
import FinallyCta from "../FinallyCta/FinallyCta";
import CTASection from "../utils/CTASection";

const PhilosophyAndFinallyCta = () => {
  return (
    <div className="border-2 border-red-500 bg-linen">
      <Philosophy />
      <FinallyCta />
      <div className="sectionFinallyCta">
        <CTASection
          text={
            "Podemos tener una primera charla para entender tu caso y ver como avanzar"
          }
          buttonText={"coordinemos una reunión"}
        />
        <p>sin compromiso, es solo una charla</p>
      </div>
    </div>
  );
};

export default PhilosophyAndFinallyCta;
