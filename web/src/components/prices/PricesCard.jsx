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
  setShowPriceModal,
  setSelectedData,
  selectedData,
}) => {
  const openModalHandler = () => {
    console.log("hago click en + info");
    setSelectedData({
      id,
      title,
      prices,
      description,
      image,
      includes,
      time,
      details,
      useCase,
    });
    console.log(selectedData);

    setShowPriceModal(true);
  };
  return (
    <div className="priceCardContainer">
      <div className="priceCard">
        <h1>{title}</h1>
        <section className="sectionPrice ">
          <div>
            <span> desde</span>
            <h2>{prices.ars ? `ARS ${prices.ars}` : "Consultar"}</h2>
          </div>
          <h6>{prices.usd ? `usd ${prices.usd}` : "-"}</h6>
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
        <button onClick={openModalHandler}>+ INFO</button>
      </div>
    </div>
  );
};
export default PricesCard;
