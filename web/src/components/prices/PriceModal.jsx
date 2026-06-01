import close from "../../assets/icons/close.svg";
import idea from "../../assets/icons/idea.svg";
import includesIcon from "../../assets/icons/includes.svg";
import timeIcon from "../../assets/icons/time.svg";
import ParseStrongText from "../utils/parseText/ParseStrongText";
import ButtonCTA from "../hero/ButtonCTA";

const PriceModal = ({ setShowPriceModal, selectedData, setShowModal }) => {
  const contentData = [...selectedData.includes, ...selectedData.details];
  console.log(contentData);

  return (
    <div className="open-modal">
      <div className="borderPriceModal">
        <div className="priceModal">
          <header>
            <button
              type="button"
              onClick={() => {
                console.log("click");
                setShowPriceModal(false);
              }}
              style={{ cursor: "pointer" }}
              aria-label="Cerrar formulario"
            >
              <img src={close} alt="Cerrar" />
            </button>
            <h1>{selectedData.title}</h1>
            <section className="sectionPrice pl-4">
              <div>
                <span> desde</span>
                <h2>
                  {selectedData.prices.ars
                    ? `ARS ${selectedData.prices.ars}`
                    : "Consultar"}
                </h2>
              </div>
              <h3>
                {selectedData.prices.usd
                  ? `usd ${selectedData.prices.usd}`
                  : ""}
              </h3>
            </section>
            <p>{selectedData.description}</p>
          </header>
          <section className="priceModalBody">
            <div>
              <img src={selectedData.image} alt={selectedData.title} />
            </div>
            <section className="priceModalContent">
              <section>
                <img src={idea} alt="Idea" />
                <p>{selectedData.useCase}</p>
              </section>
              <div className="informationContent">
                <section>
                  <img src={includesIcon} alt="Check incluye" />
                  <div>
                    <span> INCLUYE</span>
                    <ul>
                      {contentData.map((item, index) => (
                        <li key={index}>{ParseStrongText(item)}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
              <section className="timeContent">
                <img src={timeIcon} alt="Tiempo" />
                <section>
                  <span className="whitespace-nowrap"> TIEMPO ESTIMADO</span>
                  {selectedData.time ? (
                    <div>
                      <h6>{`${selectedData.time} semanas`}</h6>
                      <span>
                        Sujeto a la complejidad y alcance del proyecto
                      </span>
                    </div>
                  ) : (
                    <p>
                      {" "}
                      A definir luego de analizar necesidades, funcionalidades y
                      objetivos.
                    </p>
                  )}
                </section>
              </section>
            </section>
          </section>
          <section className="priceModalCTA">
            <div>
              <h4>Cada proyecto necesita algo diferente</h4>
              <span>
                Esto es una referencia inicial para ayudarte a entender qué tipo
                de solución puede funcionar mejor para vos
              </span>
            </div>
            <ButtonCTA setShowModal={setShowModal} />
          </section>
        </div>
      </div>
    </div>
  );
};
export default PriceModal;
