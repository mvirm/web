import icon from "../../assets/icons/icon.svg";
import menu from "../../assets/icons/menu.svg";
const NavBar = () => {
  return (
    <div>
      <img src={menu} alt="menu" className="block md:hidden w-8 h-auto ml-2" />
      <div className="navbar">
        <img src={icon} alt="icon" />
        <h6>servicios</h6>
        <h6>beneficios</h6>
        <h6>proyectos</h6>
        <h6>procesos</h6>
        <h6>acerca de mi</h6>
        <h6>contacto</h6>
      </div>
    </div>
  );
};

export default NavBar;
