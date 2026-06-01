const CarouselDots = ({ data, current, setCurrent, setTransitionEnabled }) => {
  return (
    <div className="carouselDots">
      {data.map((_, index) => (
        <button
          key={index}
          className={`carouselDot ${current === index + 1 ? "activeDot" : ""}`}
          aria-label={`Ir al slide ${index + 1}`}
          aria-current={current === index + 1 ? "true" : undefined}
          onClick={() => {
            setTransitionEnabled(true);

            setCurrent(index + 1);
          }}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
