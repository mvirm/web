import ProcessCardContainer from "./ProcessCardContainer";
import process from "../../assets/titles/process.svg";
const Process = () => {
  return (
    <div id="process" className="benefits-process-container bg-linen">
      <section>
        <img src={process} alt="Proceso" />
      </section>
      <p>
        Un proceso paso a paso, claro y acompañado, para que tengas control en
        cada etapa del proyecto.
      </p>
      <ProcessCardContainer />
    </div>
  );
};
export default Process;
