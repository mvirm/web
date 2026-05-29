import Philosophy from "../philosophy/Philosophy";
import FinallyCta from "../finallyCta/FinallyCta";
import CTASection from "../utils/CTASection";

const PhilosophyAndFinallyCta = ({ setShowModal }) => {
  return (
    <div className=" bg-linen">
      <Philosophy />
      <FinallyCta setShowModal={setShowModal} />
      <div className="sectionFinallyCta">
        <CTASection
          text={
            "Podemos tener una primera charla para entender tu caso y ver como avanzar"
          }
          buttonText={"coordinemos una reunión"}
          setShowModal={setShowModal}
        />
        <p>sin compromiso, es solo una charla</p>
      </div>
    </div>
  );
};

export default PhilosophyAndFinallyCta;
