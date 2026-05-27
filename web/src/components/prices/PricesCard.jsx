import idea from "../../assets/icons/idea.svg";
import includesIcon from "../../assets/icons/includes.svg";
import timeIcon from "../../assets/icons/time.svg";
import ParseStrongText from "../utils/parseText/ParseStrongText";
const PricesCard = ({
  id,
  title,
  prices,
  description,
  image,
  includes,
  time,
  details,
  useCase,
}) => {
  return (
    <div className="priceCardContainer">
      <div className="priceCard">
        <h1>{title}</h1>
        <section className="sectionPrice ">
          <div>
            <span> desde</span>
            <h1>{prices.ars ? `ARS ${prices.ars}` : "Consultar"}</h1>
          </div>
          <h6>{prices.usd ? `usd ${prices.usd}` : ""}</h6>
        </section>
        <p>{description}</p>
        <img src={image} alt={title} />
        <section className="sectionBody">
          <section>
            <img src={idea} alt="Idea" />
            <p>{useCase}</p>
          </section>
          <section>
            <img src={includesIcon} alt="Check incluye" />
            <div className="flex flex-col gap-2">
              <span> INCLUYE</span>
              <ul className="list-disc list-inside">
                {includes.map((include, index) => (
                  <li key={index}>{ParseStrongText(include)}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
        <button>+ INFO</button>
      </div>
    </div>
  );
};
export default PricesCard;

{
  /* <section>
  <img src={timeIcon} alt="Tiempo" className="w-8" />
  <div className="flex flex-col gap-2">
    <span> TIEMPO ESTIMADO</span>
    {time ? (
      <div className="flex flex-col gap-2">
        <span>{`${time} semanas`}</span>
        <span>Sujeto a la complejidad y alcance del proyecto</span>
      </div>
    ) : (
      <p>
        A definir luego de analizar necesidades, funcionalidades y
        objetivos.
      </p>
    )}
  </div>
</section> */
}
