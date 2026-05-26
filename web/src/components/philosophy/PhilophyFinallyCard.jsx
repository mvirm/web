import ParseStrongText from "../utils/parseText/ParseStrongText";
import ParseStyledTitle from "../utils/parseText/ParseStyleTitle";
import background from "../../assets/background/philosophy_quality.svg";

const PhilosophyFinallyCard = () => {
  return (
    <div className="philosophyFinally">
      <picture>
        <img
          src={background}
          alt="background final forma de pensar"
          loading="lazy"
        />
      </picture>
      <div className="philosophyFinallyContent">
        <p>
          El resultado no es solo algo que se ve bien, sino algo que funciona,
          escala y tiene sentido.
        </p>
        <h6>
          <span>Programar</span> es mi forma de <span>resolver problemas</span>;{" "}
          <span>diseñar</span> es mi forma de hacer que esas{" "}
          <span>soluciones</span> sean <span>memorables</span>.
        </h6>
      </div>
    </div>
  );
};
export default PhilosophyFinallyCard;
