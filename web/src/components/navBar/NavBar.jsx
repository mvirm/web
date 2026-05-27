import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import icon from "../../assets/icons/icon.svg";
import menu from "../../assets/icons/menu.svg";
const NavBar = ({ setShowModal }) => {
  // codigo para mostrar el menu desplegable en pantallas pequeñas
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const menuRef = useRef(null);
  //comportamiento del onClick para cerrar el menu desplegable al hacer click dentro o fuera de el
  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  //AUTO SCROLL PARA SECCIONES => scrollea y cierra el menu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setShowMenu(false);
    }
  };

  return (
    <div>
      {/* Icono para Menu Desplegable */}
      <div>
        <img
          src={menu}
          alt="menu"
          className="iconMenu"
          onClick={showMenuHandler}
        />
      </div>
      <div className="navbar">
        <img src={icon} alt="icon" onClick={() => scrollToSection("home")} />
        <h6 onClick={() => scrollToSection("services")}>servicios</h6>
        <h6 onClick={() => scrollToSection("benefits")}>beneficios</h6>
        <h6 onClick={() => scrollToSection("projects")}>proyectos</h6>
        <h6 onClick={() => scrollToSection("processes")}>procesos</h6>
        <h6 onClick={() => scrollToSection("about")}>acerca de mi</h6>
        <h6 onClick={() => scrollToSection("prices")}>precios</h6>
        <h6 onClick={() => setShowModal(true)}>contacto</h6>
      </div>
      {/* Menu Desplegable */}
      {showMenu && (
        <div className="showMenu" ref={menuRef}>
          <Menu scrollToSection={scrollToSection} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
