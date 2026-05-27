import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Card from "./PricesCard";
import Spinner from "../utils/Spinner";

const PricesCardContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  //traigo los datos del json
  useEffect(() => {
    fetchData({ setData, fileName: "prices", setLoading });
  }, []);

  return (
    <div className="services-benefits-cards-container">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner text={"cargando precios..."} />
        </div>
      ) : (
        data?.map((price) => (
          <Card
            id={price.id}
            key={price.id}
            title={price.title}
            prices={price.prices}
            description={price.description}
            image={price.icon}
            includes={price.includes}
            time={price.time}
            details={price.details}
            useCase={price.useCases}
          />
        ))
      )}
    </div>
  );
};

export default PricesCardContainer;
