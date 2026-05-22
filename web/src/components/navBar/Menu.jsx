import icon from "../../assets/icons/icon.svg";
const Menu = ({ scrollToSection, setShowModal }) => {
  return (
    <div className="menu">
      <img src={icon} alt="icon" onClick={() => scrollToSection("home")} />
      <h6 onClick={() => scrollToSection("services")}>servicios</h6>
      <h6 onClick={() => scrollToSection("benefits")}>beneficios</h6>
      <h6 onClick={() => scrollToSection("projects")}>proyectos</h6>
      <h6 onClick={() => scrollToSection("processes")}>procesos</h6>
      <h6 onClick={() => scrollToSection("about")}>acerca de mi</h6>
      <h6 onClick={() => setShowModal(true)}>contacto</h6>
    </div>
  );
};

export default Menu;
