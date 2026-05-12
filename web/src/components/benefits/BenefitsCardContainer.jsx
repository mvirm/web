import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Card from "./BenefitCard";
import Spinner from "../utils/Spinner";

const BenefitsCardContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  //traigo los datos del json
  useEffect(() => {
    fetchData({ setData, fileName: "benefits", setLoading });
  }, []);

  return (
    <div className="services-benefits-cards-container">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner text={"cargando beneficios..."} />
        </div>
      ) : (
        data?.map((benefit) => (
          <Card
            id={benefit.id}
            key={benefit.id}
            title={benefit.title}
            anchor={benefit.anchor}
            description={benefit.description}
            image={benefit.image}
            highlight={benefit.highlight}
          />
        ))
      )}
    </div>
  );
};
export default BenefitsCardContainer;
