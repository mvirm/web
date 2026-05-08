import { useState, useEffect } from "react";
import Card from "./ServiceCard";
const ServicesCardContainer = () => {
  //traigo los datos del json
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/json/services.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }

        return response.json();
      })
      .then((data) => {
        setData(data.services);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("servicios: ", data);

  return (
    <div className="services-benefits-cards-container">
      {data?.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          title={service.title}
          question={service.question}
          image={service.image}
          description={service.description}
          highlights={service.highlights}
        />
      ))}
    </div>
  );
};
export default ServicesCardContainer;
