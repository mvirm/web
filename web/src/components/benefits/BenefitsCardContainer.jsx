import { useState, useEffect } from "react";
import Card from "./BenefitCard";
const BenefitsCardContainer = () => {
  //traigo los datos del json
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/json/benefits.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }

        return response.json();
      })
      .then((data) => {
        setData(data.benefits);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("beneficios: ", data);

  return (
    <div className="services-benefits-cards-container">
      {data?.map((benefit) => (
        <Card
          id={benefit.id}
          key={benefit.id}
          title={benefit.title}
          anchor={benefit.anchor}
          description={benefit.description}
          image={benefit.image}
          highlight={benefit.highlight}
        />
      ))}
    </div>
  );
};
export default BenefitsCardContainer;
