import ParseStrongText from "../utils/parseText/ParseStrongText";
import ParseLigthText from "../utils/parseText/ParseLigthText";
const ServiceCard = ({
  id,
  title,
  question,
  image,
  description,
  highlights,
}) => {
  return (
    <div className="serviceCardContainer">
      <div className="serviceCard">
        {/* TITULO */}
        <h4>{ParseLigthText(title)}</h4>
        {/* CONTENIDO CENTRAL */}
        <div className="serviceCardContent">
          <section className="serviceCardHeader">
            {/* PREGUNTA -solo visible en lg */}
            <h5>{ParseStrongText(question)}</h5>
            {/* IMAGEN */}
            <div>
              <img src={image} alt="icono" loading="lazy" />
            </div>
          </section>
          {/* TEXTOS */}
          <section className="serviceCardText ">
            {/* PREGUNTA -solo visible en sm y md */}
            <h6>{ParseStrongText(question)}</h6>
            <p>{ParseStrongText(description)}</p>
          </section>
        </div>
        {/* HIGHLIGHTS */}
        <section className="serviceCardHighlights">
          <span>{highlights[0]}</span>
          <span>{highlights[1]}</span>
        </section>
      </div>
    </div>
  );
};
export default ServiceCard;
