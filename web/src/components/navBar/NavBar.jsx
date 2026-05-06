import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import icon from "../../assets/icons/icon.svg";
import menu from "../../assets/icons/menu.svg";
const NavBar = () => {
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
        <img src={icon} alt="icon" />
        <h6>servicios</h6>
        <h6>beneficios</h6>
        <h6>proyectos</h6>
        <h6>procesos</h6>
        <h6>acerca de mi</h6>
        <h6>contacto</h6>
      </div>
      {/* Menu Desplegable */}
      {showMenu && (
        <div className="showMenu" ref={menuRef}>
          <Menu setShowMenu={setShowMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
