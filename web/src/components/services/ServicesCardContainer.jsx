import { useState, useEffect } from "react";
// import axios from "axios";
import Card from "./ServiceCard";
const ServicesCardContainer = () => {
  //traigo los datos del json con axios
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     axios
  //       .get("/Json/projects.json")
  //       .then((response) => {
  //         setData(response.data.projects);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
      {/* {data?.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          title={service.title}
          question={service.question}
          image={service.image}
          description={service.description}
          highlights={service.highlights}
        />
      ))} */}
      <Card />
    </div>
  );
};
export default ServicesCardContainer;
