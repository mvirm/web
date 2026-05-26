import ParseStrongText from "../utils/parseText/ParseStrongText";

const CardProcess = ({ id, title, subtitle, background, description }) => {
  return (
    <div className="process">
      <picture>
        <img src={background} alt={title} loading="lazy" />
      </picture>
      <div className="processContent">
        <section className="processCardHead">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </section>
        <section className="processCardBody">
          <p>{ParseStrongText(description)}</p>
        </section>
      </div>
    </div>
  );
};

export default CardProcess;
