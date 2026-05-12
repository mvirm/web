import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import previous from "../../assets/icons/previous.svg";
import next from "../../assets/icons/next.svg";
import Card from "./ProjectCard";
import CarouselDots from "./CarouselDots";
import handleSwipe from "./utils/handleSwipe";
import carouselInteractions from "./utils/carouselInteractions";
import Spinner from "../utils/Spinner";

const ProjectsContainer = () => {
  //traigo los datos del json
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true); //estado que pausa la animacion para evitar el rebobinado
  const [isPaused, setIsPaused] = useState(false); //estado que pausa la animacion en el hover
  //estados para swipe mobile => deslizar slide con los dedos
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [loading, setLoading] = useState(true);

  //taigo la data del json
  useEffect(() => {
    fetchData({ setData, fileName: "projects", setLoading });
  }, []);

  //clono el ultimo y el primer objeto del array
  const extendedData =
    data.length > 0 ? [data[data.length - 1], ...data, data[0]] : [];

  const nextSlide = () => {
    if (!data.length) return;
    setTransitionEnabled(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!data.length) return;
    setTransitionEnabled(true);
    setCurrent((prev) => prev - 1);
  };
  //useEffect para que no rebobine del ultimo slide al primero y viceversa
  useEffect(() => {
    // CASO 1: El carrusel llegó al CLON FINAL
    // Ejemplo: [clon-ultimo][1][2][3][clon-primero]
    // Si current === data.length + 1 => significa que estamos parados en: [clon-primero]
    if (current === data.length + 1) {
      // esperamos 600ms porque es lo que dura la transición CSS del slide
      const timeout = setTimeout(() => {
        // desactivamos la transición para que el salto no se vea e instantaneamente movemos al slide REAL nro1
        setTransitionEnabled(false);
        setCurrent(1);

        // esperamos un poquito para que React renderice primero y volvemos a activar la transicion para futuros movimientos
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 600);
      // cleanup del timeout
      return () => clearTimeout(timeout);
    }

    // CASO 2: El carrusel llegó al CLON INICIAL
    // current === 0 significa: [clon-ultimo]
    if (current === 0) {
      // esperamos que termine la animación y desactivamos la transicion para saltar al ultimo slide REAL
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(data.length);
        // pequeño delay para reactivar las animaciones futuras
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 600);
      // cleanup del timeout
      return () => clearTimeout(timeout);
    }
  }, [current, data.length]);

  const goToNextSlide = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => prev + 1);
  };

  //use effect para animacion automatica del carrusel
  useEffect(() => {
    // si no hay data o hay hover en la card, no hacemos nada
    if (!data.length || isPaused) return;
    // creamos intervalo y avanzamos un slide
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);
    // cleanup
    return () => clearInterval(interval);
  }, [data, isPaused]);

  //interaciones de comportamiento en el carrusel: swipe mobile, hover en card
  const interactions = carouselInteractions({
    setIsPaused,
    goToNextSlide,
    setTouchStart,
    setTouchEnd,
    touchStart,
    touchEnd,
    nextSlide,
    prevSlide,
  });

  return (
    <div className="bg-linen pb-2 md:pb-4 lg:pb-8">
      <div className="projectsContainer">
        <img src={previous} alt="anterior" onClick={prevSlide} />
        <div className="carouselWrapper" {...interactions}>
          <section
            className="carouselTrack"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: transitionEnabled
                ? "transform 0.6s ease-in-out"
                : "none",
            }}
          >
            {loading && extendedData.length === 0 ? (
              <div className="spinnerContainer">
                <Spinner text={"cargando proyectos..."} />
              </div>
            ) : (
              extendedData?.map((project, index) => (
                <Card
                  key={index}
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  background={project.background}
                  images={project.images}
                  details={project.details}
                  highlights={project.highlights}
                />
              ))
            )}
          </section>
        </div>
        <img src={next} alt="siguiente" onClick={nextSlide} />
      </div>
      <CarouselDots
        data={data}
        current={current}
        setCurrent={setCurrent}
        setTransitionEnabled={setTransitionEnabled}
      />
    </div>
  );
};

export default ProjectsContainer;
