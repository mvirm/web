import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import Card from "./ProcessCard";
import Spinner from "../utils/Spinner";

const ProcessesCardContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData({ setData, fileName: "processes", setLoading });
  }, []);
  return (
    <div className="processesContainer">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner text={"cargando beneficios..."} />
        </div>
      ) : (
        data?.map((process, index) => (
          <Card
            key={index}
            id={process.id}
            title={process.title}
            subtitle={process.subtitle}
            background={process.background}
            description={process.description}
          />
        ))
      )}
    </div>
  );
};
export default ProcessesCardContainer;
