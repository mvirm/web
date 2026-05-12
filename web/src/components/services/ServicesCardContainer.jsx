import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Card from "./ServiceCard";
import Spinner from "../utils/Spinner";

const ServicesCardContainer = () => {
  //traigo los datos del json
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData({ setData, fileName: "services", setLoading });
  }, []);

  return (
    <div className="services-benefits-cards-container">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner text={"cargando beneficios..."} />
        </div>
      ) : (
        data?.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            title={service.title}
            question={service.question}
            image={service.image}
            description={service.description}
            highlights={service.highlights}
          />
        ))
      )}
    </div>
  );
};
export default ServicesCardContainer;
