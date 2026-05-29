import Card from "./PricesCard";
import Spinner from "../utils/Spinner";

const PricesCardContainer = ({
  data,
  setData,
  loading,
  setLoading,
  setShowPriceModal,
  setSelectedData,
  selectedData,
}) => {
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
            setShowPriceModal={setShowPriceModal}
            setSelectedData={setSelectedData}
            selectedData={selectedData}
          />
        ))
      )}
    </div>
  );
};

export default PricesCardContainer;
