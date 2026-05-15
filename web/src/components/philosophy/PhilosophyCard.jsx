import ParseStrongText from "../utils/parseText/ParseStrongText";
import ParseStyledTitle from "../utils/parseText/ParseStyleTitle";

const PhilosophyCard = ({ id, title, text, background }) => {
  return (
    <div className="philosophy">
      <picture>
        <img src={background} alt="" loading="lazy" />
      </picture>
      <div className="philosophyContent">
        <section className="philosophyCardHead">
          <h2>{ParseStyledTitle(title)}</h2>
        </section>
        <section className="philosophyCardBody">
          <p>{ParseStrongText(text)}</p>
        </section>
      </div>
    </div>
  );
};
export default PhilosophyCard;
