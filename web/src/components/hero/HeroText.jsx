import ButtonCTA from "./ButtonCTA.jsx";

const HeroText = ({ setShowModal }) => {
  return (
    <div className="heroText">
      <h1>DESARROLLO WEB & DISEÑO</h1>
      <h2>ORIENTADO A RESULTADOS</h2>
      <p>
        Desarrollo páginas web y soluciones digitales pensadas para tu negocio,
        donde lo técnico y lo visual trabajan juntos para que tu proyecto
        funcione de verdad
      </p>
      <h3>
        ¿Tenés un proyecto en mente?
        <br /> Te ayudo a llevarlo a la realidad digital.
      </h3>
      <ButtonCTA setShowModal={setShowModal} />
      <h4>
        ¿Tenés una web que no funciona como esperabas?
        <br />
        <span> Te ayudo a llevarla a su mejor versión</span>
      </h4>
    </div>
  );
};

export default HeroText;
