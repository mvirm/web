import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import Card from "./PhilosophyCard";
import Spinner from "../utils/Spinner";

const PhilosophyCardsContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData({ setData, fileName: "philosophy", setLoading });
  }, []);
  return (
    <div className="processesAndPhilophyContainer">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner text={"cargando forma de pensar..."} />
        </div>
      ) : (
        data?.map((ph, index) => (
          <Card
            key={index}
            id={ph.id}
            title={ph.title}
            text={ph.text}
            background={ph.background}
          />
        ))
      )}
    </div>
  );
};
export default PhilosophyCardsContainer;
