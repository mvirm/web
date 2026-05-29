import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import PricesCardContainer from "./PricesCardContainer";
import PriceModal from "./PriceModal";

const Prices = ({ setShowModal }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  //traigo los datos del json
  useEffect(() => {
    fetchData({ setData, fileName: "prices", setLoading });
  }, []);
  return (
    <div className="price">
      <section className="priceHeader">
        <h1>
          Cada solución está pensada según el objetivo del proyecto -{" "}
          <br className="block lg:hidden" />
          <span> Cada proyecto es diferente</span>
        </h1>
        <p>
          Estos planes te ayudan a tener una referencia inicial de tiempos,
          funcionalidades y alcance según lo que necesitás
          <br />
          <span>
            Cada propuesta puede crecer, simplificarse o adaptarse según las
            necesidades reales de tu proyecto.
          </span>
        </p>
      </section>
      <PricesCardContainer
        data={data}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
        setShowPriceModal={setShowPriceModal}
        setSelectedData={setSelectedData}
        selectedData={selectedData}
      />
      {showPriceModal && (
        <PriceModal
          setShowPriceModal={setShowPriceModal}
          selectedData={selectedData}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Prices;
