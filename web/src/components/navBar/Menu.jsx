import icon from "../../assets/icons/icon.svg";
const Menu = ({ setShowMenu }) => {
  return (
    <div className="menu">
      <img src={icon} alt="icon" />
      <h6>servicios</h6>
      <h6>beneficios</h6>
      <h6>proyectos</h6>
      <h6>procesos</h6>
      <h6>acerca de mi</h6>
      <h6>contacto</h6>
    </div>
  );
};

export default Menu;
