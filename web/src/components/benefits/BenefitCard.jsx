import ParseStrongText from "../utils/parseText/ParseStrongText";

const BenefitCard = ({ id, title, anchor, description, image, highlight }) => {
  return (
    <div className="benefitCardContainer">
      <div className="benefitCard">
        {/* TITULO */}
        <section className="benefitCardHeader">
          <h3>{title}</h3>
          <h4>{anchor}</h4>
        </section>
        {/* CONTENIDO CENTRAL */}
        <section className="benefitCardContent">
          {/* IMAGEN */}
          <img src={image} alt={title} loading="lazy" />
          <p>{ParseStrongText(description)}</p>
        </section>
        {/* HIGHLIGHTS */}
        <section className="benefitCardHighlight">
          <span>{highlight}</span>
        </section>
      </div>
    </div>
  );
};

export default BenefitCard;
