import ProcessesCardContainer from "./ProcessesCardContainer";
import process from "../../assets/titles/process.svg";
const Processes = () => {
  return (
    <div
      id="processes"
      className="benefits-process-finallyCTA-container bg-linen pb-4 processLayout"
    >
      <section>
        <img src={process} alt="Proceso" />
      </section>
      <p>
        Un proceso paso a paso, claro y acompañado, para que tengas control en
        cada etapa del proyecto.
      </p>
      <ProcessesCardContainer />
    </div>
  );
};
export default Processes;
